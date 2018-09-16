import React from 'react';
import styComments from './SongCommentsStyle';
import CommentHeader from './CommentHeader.jsx';
import CommentBody from './CommentBody.jsx';

class SongComments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      numComments: 0,
    };
  }

  // componentDidMount() {
  //   const { comment } = this.state;
  //   console.log('comment', comment);
  //   this.setState({
  //     comment: comment.sort((a, b) => (
  //       a.c.timeSincePost - b.c.timeSincePost
  //     )),
  //   });
  // }

  componentWillReceiveProps(nextProps) {
    const { comments } = this.props;
    // console.log(nextProps.artist);

    const findNumCom = (coms) => {
      let total = 0;
      coms.forEach((com) => {
        total += 1;
        total += com.replies.length;
      });
      return total;
    };

    // console.log((nextProps.comments.length));
    
    if (nextProps.comments !== comments) {
      this.setState({
        comments: nextProps.comments.sort((a, b) => (
          a.c.timeSincePost - b.c.timeSincePost
        )),
        numComments: findNumCom(nextProps.comments),
      });
    }
  }

  render() {
    const { numComments, comments } = this.state;
    const { StyCommentContainer, StyComBodyList } = styComments;
    return (
      <StyCommentContainer>
        <CommentHeader numComments={numComments} />
        <StyComBodyList>
          {comments.map(comment => (
            <CommentBody comment={comment} />
          ))}
        </StyComBodyList>
      </StyCommentContainer>
    );
  }
}

export default SongComments;
