import React from 'react';
import { withMobile } from './utils';

const StarredRepos = ({ starredRepos, isMobile }) => (
  <div>
    <h2>Starred Repos</h2>
    <ul style={{ color: isMobile ? 'red' : 'blue' }}>
      {starredRepos.map(repo => (
        <li>{repo.name}</li>
      ))}
    </ul>
  </div>
);

export default withMobile(StarredRepos);
