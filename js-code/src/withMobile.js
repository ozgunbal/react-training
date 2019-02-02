import React, { Component } from "react";

const withMobile = ChildComponent =>
  class MobileResize extends Component {
    state = { windowWith: window.innerWidth };
    updateSize = () => {
      this.setState({ windowWith: window.innerWidth });
    };
    componentDidMount() {
      document.addEventListener("resize", this.updateSize);
    }
    componentWillUnmount() {
      document.removeEventListener("resize", this.updateSize);
    }
    render() {
      return (
        <ChildComponent
          {...this.props}
          isMobile={this.state.windowWith < 750}
        />
      );
    }
  };

export default withMobile;
