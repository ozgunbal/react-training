import * as React from "react";
import { Repo } from "./types";
import { withMobile, InjectedMobileProps } from "./withMobile";

interface StarredReposProps extends InjectedMobileProps {
  starredRepos: Repo[];
}

const StarredRepos: React.SFC<StarredReposProps> = ({
  starredRepos,
  isMobile
}) => (
  <div>
    <h2>Starred Repos</h2>
    <ul style={{ color: isMobile ? "red" : "blue" }}>
      {starredRepos.map((repo: Repo) => (
        <li>{repo.name}</li>
      ))}
    </ul>
  </div>
);

export default withMobile(StarredRepos);
