import React from 'react';
import $ from 'jquery';
import ArtistProfile from './ArtistSidebar/ArtistProfile.jsx';
import SongDescription from './songdescription/SongDescription.jsx';
import styledOverlay from './OverlayStyle';


const queryString = require('query-string');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: {},
      comments: [],
      replies: [],
    };
  }

  componentDidMount() {
    const parsed = queryString.parse(location.search);
    // console.log(parsed.id);
    this.fetch(Number(parsed.id));
  }

  fetch(songid) {
    $.ajax({
      method: 'GET',
      url: `http://localhost:3001/songs/${songid}`,
      success: (data) => {
        this.importData(data);
      },
      error: (error) => {
        console.log('error  ', error);
      },
    });
  }

  importData(data) {
    console.log("data", JSON.parse(data));
    const parsedData = JSON.parse(data);

    const getComments = (dataObject) => {
      const results = [];
      for (let i = 0; i < dataObject.comments.length - 1; i += 1) {
        if (dataObject.comments[i].comText !== dataObject.comments[i + 1].comText) {
          results.push(dataObject.comments[i]);
        }
      }
      results[results.length] = dataObject.comments[dataObject.comments.length - 1];
      return results;
    };

    const songComments = getComments(parsedData);

    this.setState(() => {
      return {
        artist: parsedData.artist[0],
        comments: songComments,
        replies: parsedData.comments,
      };
    });
  }

  render() {
    const { artist } = this.state;
    const { OverlayContainer, LeftBar, MiddleBar } = styledOverlay;
    return (
      <OverlayContainer>
        <LeftBar>
          <ArtistProfile artist={artist} />
        </LeftBar>
        <MiddleBar>
          <SongDescription desc={artist.description} />
          <SongComments 
        </MiddleBar>
      </OverlayContainer>
    );
  }
}

export default App;
