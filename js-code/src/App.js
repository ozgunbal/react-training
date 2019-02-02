import React, { Component } from 'react';
import UserInfo from './UserInfo';
import StarredRepos from './StarredRepos';
import { fetchGithubUser, fetchStarredRepos } from './utils';
import './App.css';

class App extends Component {
  state = {
    userName: '',
    userData: null,
    starredRepos: null,
  };
  handleChange = ({ target }) => {
    this.setState({ userName: target.value });
  };
  handleClick = async () => {
    const { userName } = this.state;
    this.loadData(userName);
  };

  loadData = async userName => {
    const userData = await fetchGithubUser(userName);
    const starredRepos = await fetchStarredRepos(userName);
    this.setState({ userData, starredRepos });
  };
  componentDidMount() {
    this.loadData('ozgunbal');
  }
  render() {
    const { userData, starredRepos, userName } = this.state;
    return (
      <div className="App">
        <h1>Github Profile Explorer</h1>
        <input
          value={userName}
          placeholder="github username"
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Show</button>
        {userData && <UserInfo userData={userData} />}
        {starredRepos && <StarredRepos starredRepos={starredRepos} />}
      </div>
    );
  }
}

export default App;
