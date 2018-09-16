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
        this.importData(data);
      },
      error: (error) => {
        console.log('error  ', error);
      },
    });
  }

  importData(data) {
    console.log('data', JSON.parse(data));
    const parsedData = JSON.parse(data);

    const getComments = (dataObject) => {
      const { comments } = dataObject;
      const results = [];
      for (let i = 0; i < comments.length - 1; i += 1) {
        if (comments[i].c.comText !== comments[i + 1].c.comText) {
          results.push(comments[i]);
          results[results.length - 1].replies = [{
            reply: comments[i].r,
            replyUser: comments[i].uu,
          }];
          ['r', 'uu'].forEach(key => delete results[results.length - 1][key]);
        } else if (results[results.length - 1]) {
          results[results.length - 1].replies.push({
            reply: comments[i].r,
            replyUser: comments[i].uu,
          });
          ['r', 'uu'].forEach(key => delete results[results.length - 1][key]);
        }
      }

      if (results[results.length - 1].c.comText !== comments[comments.length - 1].c.comText) {
        results[results.length] = comments[comments.length - 1];
        results[results.length - 1].replies = [{
          reply: comments[comments.length - 1].r,
          replyUser: comments[comments.length - 1].uu,
        }];
      } else {
        results[results.length - 1].replies.push({
          reply: comments[comments.length - 1].r,
          replyUser: comments[comments.length - 1].uu,
        });
      }
      ['r', 'uu'].forEach(key => delete results[results.length - 1][key]);
      return results;
    };

    const songComments = getComments(parsedData);

    console.log('single comments', songComments);
    this.setState(() => {
      return {
        artist: parsedData.artist[0],
        comments: songComments,
      };
    });
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
