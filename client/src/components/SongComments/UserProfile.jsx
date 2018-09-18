import React from 'react';
import styComments from './SongCommentsStyle';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followingUser: false
    };
  }

  render() {
    const { user } = this.props;
    const { StyUserBox, StyUserDpA, StyUserDpDiv, StyUserDpSpan } = styComments;
    return (
      <StyUserBox>
        <StyUserDpA>
          <StyUserDpDiv>
            <StyUserDpSpan dp={user.dp} />
          </StyUserDpDiv>
        </StyUserDpA>
      </StyUserBox>
    );
  }
}

export default UserProfile;
