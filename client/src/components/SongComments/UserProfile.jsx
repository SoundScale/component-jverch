import React from 'react';
import styComments from './SongCommentsStyle';
import UserFollowBut from './UserFollowBut.jsx'

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followingUser: false,
    };
    this.changeFollowStatus = this.changeFollowStatus.bind(this);
  }

  changeFollowStatus() {
    this.setState(prevState => ({ followingUser: !prevState.followingUser }));
  }

  render() {
    const { user } = this.props;
    const { followingUser } = this.state;
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
            {user.userName}
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
          <UserFollowBut followStatus={followingUser} changeStatus={this.changeFollowStatus} />
        </div>
      </StyUserBox>
    );
  }
}

export default UserProfile;
