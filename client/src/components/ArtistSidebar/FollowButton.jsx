import React from 'react';
import PropTypes from 'prop-types';
import styledComponents from './styledArtist';

const FollowButton = (props) => {
  const { followStatus, changeStatus } = props;
  const { StyFolButton } = styledComponents;
  if (followStatus) {
    return (
      <StyFolButton followStatus={followStatus} onClick={changeStatus}>
        Following
      </StyFolButton>
    );
  }
  return (
    <StyFolButton followStatus={followStatus} onClick={changeStatus}>
      Follow
    </StyFolButton>
  );
};

FollowButton.propTypes = {
  followStatus: PropTypes.bool,
  changeStatus: PropTypes.func,
};

export default FollowButton;
