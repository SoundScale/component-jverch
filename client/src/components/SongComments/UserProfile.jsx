import React from 'react';
import styComments from './SongCommentsStyle';
import UserFollowBut from './UserFollowBut.jsx'

const UserProfile = (props) => {
  const { user } = props;
  const { StyUserBox, StyUserDpA, StyUserDpDiv, StyUserDpSpan } = styComments;
  const { StyUsernameDiv, StyUsernameA } = styComments;
  const { StyUserFolDiv, StyUserFolA, StyUserFolIcon } = styComments;
  const { StyUserAddDiv } = styComments;
  return (
    <StyUserBox>
      <StyUserDpA>
        <StyUserDpDiv>
          <StyUserDpSpan dp={user.dp} />
        </StyUserDpDiv>
      </StyUserDpA>
      <StyUsernameDiv>
        <StyUsernameA>
          {user.username}
        </StyUsernameA>
      </StyUsernameDiv>
      <StyUserFolDiv>
        <StyUserFolA>
          <StyUserFolIcon />
          <span>{` ${user.followers}`}</span>
        </StyUserFolA>
      </StyUserFolDiv>
      <StyUserAddDiv>
        <p>{user.home}</p>
      </StyUserAddDiv>
      <div>
        <UserFollowBut key={user.id} />
      </div>
    </StyUserBox>
  );
};

export default UserProfile;
