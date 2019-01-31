import React from 'react';

const UserInfo = ({ userData }) => (
  <div>
    <img src={userData.avatar_url} alt={`${userData.name}'s avatar`} />
    <p>Name: {userData.name}</p>
    <p>Bio: {userData.bio}</p>
  </div>
);

export default UserInfo;
