import React from 'react';
import Tooltip from 'react-portal-tooltip';
import styComments from './SongCommentsStyle';
import WriteReplyBar from './WriteReplyBar.jsx';
import ReplyButton from './ReplyButton.jsx';
import UserProfile from './UserProfile.jsx';

class CommentBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: props.comment,
      isReply: props.isReply,
      replyVis: false,
      replyToCom: {},
      replyText: '',
      emptyReply: true,
      isTooltipActive: false,
      hasReply: props.hasReply,
    };
    this.handleReply = this.handleReply.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.findParentComment = this.findParentComment.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
  }

  findParentComment(id) {
    const { comment } = this.state;
    if (id === comment.c.id) {
      return comment;
    }
    return comment.replies.find(reply => reply.c.id === id);
  }

  sortReplies() {
    const { comment } = this.state;
    return comment.replies.sort((a, b) => (
      b.c.timesincepost - a.c.timesincepost
    ));
  }

  handleEnter(e, replyingTo) {
    if (e.key === 'Enter') {
      const { replyText, comment } = this.state;
      const newComment = {
        c: {
          id: Math.floor(Math.random() * 999999) + 9999,
          comtext: replyText,
          timesincepost: 0,
          userid: 9999999999,
          commentid: replyingTo.c.id,
        },
        u: {
          id: 9999999999,
          dp: 'https://secure.meetupstatic.com/photos/member/c/e/b/e/highres_253972926.jpeg',
          followstatus: 0,
          followers: 999,
          home: 'San Francisco',
          username: 'Lil.Freddy-Z',
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
    this.setState({ replyVis: true, replyToCom: comment });
  }

  hideTooltip() {
    this.setState({ isTooltipActive: false });
  }

  showTooltip() {
    this.setState({ isTooltipActive: true });
  }

  render() {
    const { comment, hasReply, isReply, replyVis, replyToCom, replyText, emptyReply, isTooltipActive } = this.state;
    const { StyCom, StyComDp, StyComTextCont } = styComments;
    const { StyComUserTimeRow, StyComUser, StyComTimeCont, StyComTime } = styComments;
    const { StyComText, StyComP, StyAt } = styComments;
    const { StyPastReplyCol, StyPast } = styComments;
    const { StyComBodyList } = styComments;
    const atText = !isReply ? 'at ' : '';
    const commentUsername = comment.u.username;
    const removeDotUser = commentUsername.replace('.', '');
    const commentid = comment.c.id;
    return (
      <li>
        <StyCom isReply={isReply}>
          <StyComDp dp={comment.u.dp} />
          <StyComTextCont>
            <StyComUserTimeRow>
              <StyComUser onMouseEnter={this.showTooltip} onMouseLeave={this.hideTooltip} id={removeDotUser + commentid}>
                {commentUsername}
              </StyComUser>
              <Tooltip active={isTooltipActive} position="bottom" arrow="center" parent={`#${removeDotUser + commentid}`}>
                <UserProfile user={comment.u} />
              </Tooltip>
              <StyComTimeCont>
                {atText}
                <StyComTime>
                  {comment.c.songtimespot}
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
                        <StyAt>{this.props.findParentComment(comment.c.commentid).u.username}</StyAt>
                      </span>
                    )
                  }
                  {comment.c.comtext}
                </StyComP>
              </span>
            </StyComText>
          </StyComTextCont>
          <StyPastReplyCol>
            <StyPast>
              {`${comment.c.timesincepost} minutes ago`}
            </StyPast>
            <ReplyButton
              isReply={isReply}
              replyToReplyBut={this.props.handleRep}
              replToCommentBut={this.handleReply}
              comment={comment}
            />
          </StyPastReplyCol>
        </StyCom>
        {(hasReply)
          && (
            <StyComBodyList>
              {this.sortReplies().map(reply => (
                <CommentBody hasReply={false} comment={reply} isReply parent={comment} handleRep={this.handleReply} findParentComment={this.findParentComment} key={reply.c.id} />
              ))}
            </StyComBodyList>
          )
        }
        { replyVis
          && (
            <WriteReplyBar
              isReply
              replyToComUser={replyToCom.u.username}
              onChange={this.handleInputChange}
              value={replyText}
              emptyReply={emptyReply}
              onKeyPress={e => this.handleEnter(e, replyToCom)}
            />
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
