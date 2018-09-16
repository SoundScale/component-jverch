import React from 'react';
import styComments from './SongCommentsStyle';

class CommentBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: props.comment,
      hoverOver: false,
    };
  }

  render() {
    const { comment } = this.state;
    const { StyCom, StyComDp, StyComTextCont } = styComments;
    const { StyComUserTimeRow, StyComUser, StyComTimeCont, StyComTime } = styComments;
    const { StyComText, StyComP } = styComments;
    const { StyPastReplyCol, StyPast } = styComments;
    return (
      <li>
        <StyCom>
          <StyComDp dp={comment.u.dp} />
          <StyComTextCont>
            <StyComUserTimeRow>
              <StyComUser>
                {comment.u.userName}
              </StyComUser>
              <StyComTimeCont>
                {'at '}
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
          </StyPastReplyCol>
        </StyCom>
      </li>
    );
  }
}

export default CommentBody;

// {this.state.comment.c.comText}
