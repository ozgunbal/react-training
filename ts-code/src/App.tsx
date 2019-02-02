import * as React from "react";
import UserInfo from "./UserInfo";
import StarredRepos from "./StarredRepos";
import { fetchGithubUser, fetchStarredRepos } from "./utils";
import { AppState } from "./types";
import "./App.css";

class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      userName: "",
      userData: undefined,
      starredRepos: undefined
    };
  }
  handleChange = (event: React.SyntheticEvent): void => {
    const target = event.target as HTMLInputElement;
    this.setState({ userName: target.value });
  };

  handleClick = (): void => {
    const { userName } = this.state;
    this.loadData(userName);
  };

  loadData = async (userName: string): Promise<void> => {
    const userData = await fetchGithubUser(userName);
    const starredRepos = await fetchStarredRepos(userName);
    this.setState({ userData, starredRepos });
  };
  componentDidMount(): void {
    this.loadData("ozgunbal");
  }
  render(): React.ReactNode {
    const { starredRepos, userData, userName } = this.state;
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
