import React from 'react';
import styComments from './SongCommentsStyle';

const WriteReplyBar = (props) => {
  const { StyCom } = styComments;
  const { StyComBodyList, StyEditDiv, StyRepDiv } = styComments;
  const { StyRepTextRow, StyRepIconDiv, StyRepIcon } = styComments;
  const { StypTempAt, StyTempRepA, StyRepInput } = styComments;
  const { isReply, replyToComUser, onChange, value, emptyReply, onKeyPress } = props;
  return (
    <StyComBodyList>
      <StyCom isReply={isReply}>
        <StyEditDiv>
          <StyRepDiv>
            <StyRepIconDiv>
              <StyRepIcon />
            </StyRepIconDiv>
            <StyRepTextRow>
              <StypTempAt>
                @
                <StyTempRepA>{replyToComUser}</StyTempRepA>
                <StyRepInput onChange={onChange} value={value} placeholder="Write a reply" emptyReply={emptyReply} onKeyPress={onKeyPress}/>
              </StypTempAt>
            </StyRepTextRow>
          </StyRepDiv>
        </StyEditDiv>
      </StyCom>
    </StyComBodyList>
  );
};

export default WriteReplyBar;
