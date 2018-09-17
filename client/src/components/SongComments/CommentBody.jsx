import React from 'react';
import styComments from './SongCommentsStyle';
// import ReplyBody from './ReplyBody.jsx'

class CommentBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: props.comment,
      isReply: props.isReply,
      replyVis: false,
      replyUser: 'Write a comment',
    };
    this.handleReply = this.handleReply.bind(this);
  }

  sortReplies() {
    const { comment } = this.state;
    return comment.replies.sort((a, b) => (
      b.c.timeSincePost - a.c.timeSincePost
    ));
  }

  handleReply(comment) {
    this.setState({replyVis: true, replyUser:comment.u.userName});
  }

  render() {
    const { comment, isReply, replyVis } = this.state;
    const { StyCom, StyComDp, StyComTextCont } = styComments;
    const { StyComUserTimeRow, StyComUser, StyComTimeCont, StyComTime } = styComments;
    const { StyComText, StyComP, StyAt } = styComments;
    const { StyPastReplyCol, StyPast, StyButDiv, StyRepBut } = styComments;
    const { StyComBodyList, StyEditDiv, StyRepDiv } = styComments;
    const { StyRepTextRow, StyRepIconDiv, StyRepIcon } = styComments;
    const { StypTempAt, StyTempRepA, StyRepInput } = styComments;
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
                  {isReply
                    && (
                      <span>
                        @
                        <StyAt>{this.props.parent.u.userName}</StyAt>
                      </span>
                    )
                  }
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
              {isReply
                ? (
                  <StyRepBut onClick={() => this.props.handleRep(comment)} />
                ) : (
                  <StyRepBut onClick={() => this.handleReply(comment)} />
                )
              }
            </StyButDiv>
          </StyPastReplyCol>
        </StyCom>
        { !(isReply)
          && (
            <StyComBodyList>
              {this.sortReplies().map(reply => (
                <CommentBody comment={reply} isReply parent={comment} handleRep={this.handleReply}/>
              ))}
            </StyComBodyList>
          )
        }
        { replyVis
          && (
            <StyComBodyList>
              <StyCom isReply={true}>
                <StyEditDiv>
                  <StyRepDiv>
                    <StyRepIconDiv>
                      <StyRepIcon />
                    </StyRepIconDiv>
                    <StyRepTextRow>
                      <StypTempAt>
                        @
                        <StyTempRepA>{this.state.replyUser}</StyTempRepA>
                        <StyRepInput></StyRepInput>
                      </StypTempAt>
                    </StyRepTextRow>
                  </StyRepDiv>
                </StyEditDiv>
              </StyCom>
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
