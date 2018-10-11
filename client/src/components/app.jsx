import React from 'react';
import $ from 'jquery';
import ArtistProfile from './ArtistSidebar/ArtistProfile.jsx';
import SongDescription from './songdescription/SongDescription.jsx';
import SongComments from './SongComments/SongComments.jsx';
import styledOverlay from './OverlayStyle.js';


// const queryString = require('query-string');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: {},
      comments: [],
    };
  }

  componentDidMount() {
    // const parsed = queryString.parse(location.search);
    // // console.log(parsed.id);
    // this.fetch(Number(parsed.id));
    const url = window.location.href;
    let endpoint = url.split('/');
    endpoint = endpoint[endpoint.length - 2];
    console.log(endpoint);
    this.fetch(endpoint);
  }

  fetch(songid) {
    // $.ajax({
    //   method: 'GET',
    //   url: `http://localhost:3001/api/${songid}`,
    //   success: (data) => {
    //     this.reformatData(data);
    //   },
    //   error: (error) => {
    //     console.log('error  ', error);
    //   },
    // });
    $.ajax({
      method: 'GET',
      url: `/api/comments/${songid}`,
      success: (data) => {
        console.log('DATA:');
        console.log(data);
        // console.log(JSON.parse(data));
        this.reformatData(data);
      },
      error: (error) => {
        console.log('error  ', error);
      },
    });
  }

  reformatData(data) {
    // console.log('data', JSON.parse(data));
    console.log('DATA WOW', data);
    // const parsedData = JSON.parse(data);
    const parsedData = data;

    const getComments = (dataObject) => {
      const { comments } = dataObject;
      const commentsObj = {};
      const results = [];

      for (let i = 0; i < comments.length; i += 1) {
        const currId = comments[i].c.id;
        if (!commentsObj[currId]) {
          const newComment = {
            c: comments[i].c,
            u: comments[i].u,
            replies: [],
          };
          commentsObj[currId] = newComment;
        }
        if (comments[i].r) {
          const newResponse = {
            c: comments[i].r,
            u: comments[i].uu,
          };
          commentsObj[currId].replies.push(newResponse);
        }
      }

      Object.values(commentsObj).forEach(item => results.push(item));
      
      return results;
    };

    const songComments = getComments(parsedData);
    console.log('RESULT FROM GETCOMMENTS:', songComments);
    // songComments[1].replies = [];

    // c: {id: 216, comText: "SLIMEY D:", userId: 622, songId: 29, songTimeSpot: "4:50", …}
    // u: {id: 622, userName: "Clint_Trantow", followers: 49, followStatus: 0, home: "Kansas", …}
    // replies: (3) [{…}, {…}, {…}]

    // Replies is an array containing these: (or empty)
      // c: {id: 108, comText: "SLIMEY D:", timeSincePost: 21, userId: 57, commentId: 216}
      // u: {id: 57, userName: "Emelia6", followers: 167, followStatus: 1, home: "Nevada", …}


    // console.log('single comments', songComments);
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
    const { FooterBar, FooterImg } = styledOverlay;
    return (
      <OverlayContainer>
        <LeftBar>
          <ArtistProfile artist={artist} />
        </LeftBar>
        <MiddleBar>
          <SongDescription desc={artist.description} />
          <SongComments comments={comments} />
          <FooterBar>
            <FooterImg></FooterImg>
          </FooterBar>
        </MiddleBar>
      </OverlayContainer>
    );
  }
}

export default App;
