import React from 'react';
import $ from 'jquery';
import ArtistProfile from './ArtistSidebar/ArtistProfile.jsx';
import SongDescription from './songdescription/SongDescription.jsx';
import SongComments from './SongComments/SongComments.jsx';
import styledOverlay from './OverlayStyle';


const queryString = require('query-string');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: {},
      comments: [],
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
        this.reformatData(data);
      },
      error: (error) => {
        console.log('error  ', error);
      },
    });
  }

  reformatData(data) {
    console.log('data', JSON.parse(data));
    const parsedData = JSON.parse(data);

    const getComments = (dataObject) => {
      const { comments } = dataObject;
      const results = [];

      if (comments.length === 1) {
        results.push(comments[0]);
        results[0].replies = [{
          c: comments[0].r,
          u: comments[0].uu,
        }];
        delete results[0].r;
        delete results[0].uu;
        return results;
      }

      for (let x = 0; x < comments.length - 1; x += 1) {
        if (comments[x].c.comText !== comments[x + 1].c.comText) {
          results.push(comments[x]);
        }
      }

      results.push(comments[comments.length - 1]);

      for (let i = 0; i < results.length; i += 1) {
        for (let j = 0; j < comments.length; j += 1) {
          if (results[i].c.id === comments[j].c.id) {
            if (results[i].replies) {
              results[i].replies.push({
                c: comments[j].r,
                u: comments[j].uu,
              });
            } else {
              results[i].replies = [{
                c: comments[j].r,
                u: comments[j].uu,
              }];
            }
          }
        }
        ['r', 'uu'].forEach(key => delete results[i][key]);
      }
      console.log('"results insert replies"', results);

      return results;
    };

    const songComments = getComments(parsedData);

    console.log('single comments', songComments);
    this.setState(() => (
      {
        artist: parsedData.artist[0],
        comments: songComments,
      }
    ));
  }

  render() {
    const { artist } = this.state;
    const { comments } = this.state;
    const { OverlayContainer, LeftBar, MiddleBar } = styledOverlay;
    return (
      <OverlayContainer>
        <LeftBar>
          <ArtistProfile artist={artist} />
        </LeftBar>
        <MiddleBar>
          <SongDescription desc={artist.description} />
          <SongComments comments={comments} />
        </MiddleBar>
      </OverlayContainer>
    );
  }
}

export default App;
