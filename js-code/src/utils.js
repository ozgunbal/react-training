import React, { Component } from 'react';

export const fetchGithubUser = username =>
  fetch(`https://api.github.com/users/${username}`).then(response =>
    response.json(),
  );

export const fetchStarredRepos = username =>
  fetch(`https://api.github.com/users/${username}/starred`).then(response =>
    response.json(),
  );

export const withMobile = Child => {
  return class MobileResize extends Component {
    state = {
      windowWidth: window.innerWidth,
    };
    componentDidMount() {
      window.addEventListener('resize', this.updateSize);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateSize);
    }

    updateSize = event => {
      this.setState({ windowWidth: window.innerWidth });
    };

    render() {
      const { windowWidth } = this.state;
      return <Child {...this.props} isMobile={windowWidth < 800} />;
    }
  };
};

export default withMobile;
