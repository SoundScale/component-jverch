import React from 'react';
import styComments from './SongCommentsStyle';

const ReplyButton = (props) => {
  const { StyButDiv, StyRepBut } = styComments;
  const {isReply, replyToReplyBut, replToCommentBut, comment } = props;
  return (
    <StyButDiv>
      {isReply
        ? (
          <StyRepBut onClick={() => replyToReplyBut(comment)} />
        ) : (
          <StyRepBut onClick={() => replToCommentBut(comment)} />
        )
      }
    </StyButDiv>
  );
}

export default ReplyButton;
