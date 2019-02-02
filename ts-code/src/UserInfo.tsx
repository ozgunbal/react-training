import * as React from "react";
import { UserData } from "./types";

interface UserInfoProps {
  userData: UserData;
}

const UserInfo: React.SFC<UserInfoProps> = ({ userData }) => (
  <div>
    <img src={userData.avatar_url} alt={`${userData.name}'s avatar`} />
    <p>Name: {userData.name}</p>
    <p>Bio: {userData.bio}</p>
  </div>
);

export default UserInfo;
