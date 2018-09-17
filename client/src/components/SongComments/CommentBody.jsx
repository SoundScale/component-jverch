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
      replyUser: '',
      replyText: '',
      emptyReply: true,
    };
    this.handleReply = this.handleReply.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  sortReplies() {
    const { comment } = this.state;
    return comment.replies.sort((a, b) => (
      b.c.timeSincePost - a.c.timeSincePost
    ));
  }

  handleEnter(e) {
    if (e.key === 'Enter') {
      const { replyText, comment } = this.state;
      const newComment = {
        c: {
          comText: replyText,
          timeSincePost: 0,
          userId: 9999999999,
        },
        u: {
          id: 9999999999,
          dp: 'https://secure.meetupstatic.com/photos/member/c/e/b/e/highres_253972926.jpeg',
          followStatus: 0,
          home: 'San Francisco',
          userName: 'Lil.Freddy-Z',
        },
      };
      comment.replies.push(newComment);
      this.setState({
        comment,
        replyText: '',
        replyVis: false,
      });
    }
  }

  handleInputChange(e) {
    if (e.target.value === '') {
      this.setState({ replyText: '', emptyReply: true });
    } else {
      this.setState({ replyText: e.target.value, emptyReply: false });
    }
  }

  handleReply(comment) {
    this.setState({ replyVis: true, replyUser: comment.u.userName });
  }

  render() {
    const { comment, isReply, replyVis, replyUser, replyText, emptyReply } = this.state;
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
              <StyCom isReply>
                <StyEditDiv>
                  <StyRepDiv>
                    <StyRepIconDiv>
                      <StyRepIcon />
                    </StyRepIconDiv>
                    <StyRepTextRow>
                      <StypTempAt>
                        @
                        <StyTempRepA>{replyUser}</StyTempRepA>
                        <StyRepInput onChange={this.handleInputChange} value={replyText} placeholder="Write a reply" emptyReply={emptyReply} onKeyPress={this.handleEnter}/>
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
