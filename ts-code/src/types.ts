export type Repo = {
  name: string;
};

export type UserData = {
  name: string;
  bio: string;
  avatar_url: string;
};

export type AppState = {
  userName: string;
  userData?: UserData;
  starredRepos?: Repo[];
};
