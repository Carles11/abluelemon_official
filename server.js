const express = require('express')
const dotenv = require('dotenv').config()
const path = require('path')
const compression = require('compression')
const bodyParser = require('body-parser')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001
const ENV = process.env.NODE_ENV || 'development'
app.use(compression())
app.use(bodyParser.urlencoded({ extended: 'true' }))
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'service-worker.js'))
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running fine on port ${String(PORT)} in (${ENV}).`)
})
