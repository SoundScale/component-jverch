import React from 'react';
import styComments from './SongCommentsStyle';

const UserFollowBut = (props) => {
  const { followStatus, changeStatus } = props;
  const { StyUseFolButton } = styComments;
  if (followStatus) {
    return (
      <StyUseFolButton followStatus={followStatus} onClick={changeStatus}>
        Following
      </StyUseFolButton>
    );
  }
  return (
    <StyUseFolButton followStatus={followStatus} onClick={changeStatus}>
      Follow
    </StyUseFolButton>
  );
};

export default UserFollowBut;
