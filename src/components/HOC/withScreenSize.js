import React from 'react';

const withScreenSize = Component =>
  class extends React.Component {
    state = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    componentDidMount() {
      window.addEventListener('resize', this.getWindowSize);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.getWindowSize);
    }

    getWindowSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      this.setState(() => ({ width, height }));
    };

    render() {
      return <Component {...this.state} {...this.props} />;
    }
  };

export default withScreenSize;
