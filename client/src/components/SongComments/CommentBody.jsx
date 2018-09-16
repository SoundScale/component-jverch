import React from 'react';
import styComments from './SongCommentsStyle';
// import ReplyBody from './ReplyBody.jsx'

class CommentBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: props.comment,
      isReply: props.isReply,
    };
  }

  sortReplies() {
    const { comment } = this.state;
    return comment.replies.sort((a, b) => (
      a.c.timeSincePost - b.c.timeSincePost
    ));
  }

  render() {
    const { comment, isReply } = this.state;
    const { StyCom, StyComDp, StyComTextCont } = styComments;
    const { StyComUserTimeRow, StyComUser, StyComTimeCont, StyComTime } = styComments;
    const { StyComText, StyComP } = styComments;
    const { StyPastReplyCol, StyPast, StyButDiv, StyRepBut } = styComments;
    const { StyComBodyList } = styComments;
    const atText = !isReply ? 'at ' : '';
    
    return (
      <li>
        <StyCom isReply={isReply}>
          <StyComDp dp={comment.u.dp} />
          <StyComTextCont>
            <StyComUserTimeRow>
              <StyComUser>
                {comment.u.userName}
              </StyComUser>
              <StyComTimeCont>
                {atText}
                <StyComTime>
                  {comment.c.songTimeSpot}
                </StyComTime>
              </StyComTimeCont>
            </StyComUserTimeRow>
            <StyComText>
              <span>
                <StyComP>
                  {comment.c.comText}
                </StyComP>
              </span>
            </StyComText>
          </StyComTextCont>
          <StyPastReplyCol>
            <StyPast>
              {`${comment.c.timeSincePost} minutes ago`}
            </StyPast>
            <StyButDiv>
              <StyRepBut />
            </StyButDiv>
          </StyPastReplyCol>
        </StyCom>
        { !(isReply)
          && (
            <StyComBodyList>
              {this.sortReplies().map(reply => (
                <CommentBody comment={reply} isReply />
              ))}
            </StyComBodyList>
          )
        }
      </li>
    );
  }
}

export default CommentBody;

// {this.state.comment.c.comText}

// {comment.replies.map(reply => (
//   <ReplyBody reply={reply} isReply />
// ))}
