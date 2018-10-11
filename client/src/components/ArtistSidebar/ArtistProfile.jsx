import React from 'react';
import PropTypes from 'prop-types';
import styledComponents from './styledArtist';
import PremiumPlan from './premiumPlan.jsx';
import FollowButton from './FollowButton.jsx';

class ArtistProfile extends React.Component {
  constructor(props) {
    super(props);
    const { artist } = props;
    this.state = { artist };
    this.changeFollowStatus = this.changeFollowStatus.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { artist } = this.props;
    // console.log(nextProps.artist);
    if (nextProps.artist !== artist) {
      this.setState({
        artist: nextProps.artist,
      });
    }
  }

  changeFollowStatus() {
    this.setState((previousState) => {
      return {
        artist: {
          ...previousState.artist,
          followstatus: !previousState.artist.followstatus,
        },
      };
    });
  }

  render() {
    const { artist } = this.state;
    const { StyAvatar, StyProfileDiv } = styledComponents;
    const { StyArtistContentDiv, StyArtistNameStatus, StyArtistName } = styledComponents;
    const { StyFollowerTracksRow, StyFollowerIcon, StyFollowerCount } = styledComponents;
    const { StyTracksIcon, StyTracksCount } = styledComponents;
    const { StyReportDiv, StyReportBut } = styledComponents;
    return (
      <StyProfileDiv>
        <StyAvatar src={artist.dp} alt="Avatar" id="dp" />
        <StyArtistContentDiv>
          <StyArtistNameStatus>
            <StyArtistName>{artist.username}</StyArtistName>
            <PremiumPlan premium={artist.premium} />
          </StyArtistNameStatus>
        </StyArtistContentDiv>
        <StyFollowerTracksRow>
          <StyFollowerIcon />
          <StyFollowerCount>{artist.followers}</StyFollowerCount>
          <StyTracksIcon />
          <StyTracksCount>{artist.numtracks}</StyTracksCount>
        </StyFollowerTracksRow>
        <div>
          <FollowButton followStatus={artist.followstatus} changeStatus={this.changeFollowStatus} />
        </div>
        <StyReportDiv>
          <StyReportBut>Report</StyReportBut>
        </StyReportDiv>
      </StyProfileDiv>
    );
  }
}

ArtistProfile.propTypes = {
  artist: PropTypes.object,
};

export default ArtistProfile;
