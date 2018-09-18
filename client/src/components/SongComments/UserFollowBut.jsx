import React from 'react';
import styComments from './SongCommentsStyle';

class UserFollowBut extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    this.setState(prevState => ({ clicked: !prevState.clicked }));
  }

  render() {
    const { StyUseFolButton } = styComments;
    const { clicked } = this.state;
    if (clicked) {
      return (
        <StyUseFolButton followStatus={clicked} onClick={this.clicked}>
          Following
        </StyUseFolButton>
      );
    }
    return (
      <StyUseFolButton followStatus={clicked} onClick={this.clicked}>
        Follow
      </StyUseFolButton>
    );
  }
}

export default UserFollowBut;
