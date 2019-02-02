import { Repo, UserData } from './types';

export const fetchGithubUser = (username: string): Promise<UserData> =>
  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then((userData: any) => ({
      name: userData.name,
      bio: userData.bio,
      avatar_url: userData.avatar_url,
    }));

export const fetchStarredRepos = (username: string): Promise<Repo[]> =>
  fetch(`https://api.github.com/users/${username}/starred`)
    .then(response => response.json())
    .then(repos => repos.map((repo: any) => ({ name: repo.name })));
