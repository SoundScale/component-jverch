import React from 'react';
import styledComponents from './styledArtist';

const FollowButton = (props) => {
  const { followStatus } = props;
  const { changeStatus } = props;
  const { FolButton } = styledComponents;
  if (followStatus) {
    return (
      <FolButton followStatus={followStatus} onClick={changeStatus}>
        Following
      </FolButton>
    );
  }
  return (
    <FolButton followStatus={followStatus} onClick={changeStatus}>
      Follow
    </FolButton>
  );
};

export default FollowButton;
