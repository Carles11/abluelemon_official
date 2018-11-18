import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  position: relative;
  background: yellow;
  z-index: 1;
`

const Footer = props => {
  return (
    <Container>JUst a footer</Container>
  )
}

export default Footer