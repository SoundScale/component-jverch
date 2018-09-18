import React from 'react';
import styComments from './SongCommentsStyle';

const CommentHeader = (props) => {
  const { numComments } = props;
  const { StyComRow, StyComHead, StyComIcon, StyComNum } = styComments;
  return (
    <StyComRow>
      <StyComHead>
        <StyComIcon />
        <StyComNum>
          {`${numComments} comments`}
        </StyComNum>
      </StyComHead>
    </StyComRow>
  );
}

export default CommentHeader;
