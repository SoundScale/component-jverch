import styled from 'styled-components';

const StyCommentContainer = styled.div`
display: block;
width: 100%;
height: 100%;
position: relative;
`;

const StyComRow = styled.div`
font-weight: 100;
color: #999;
border-bottom: 1px solid #f2f2f2;
`;

const StyComHead = styled.h3`
padding-bottom: 7px;
`;

const StyComIcon = styled.span`
display: inline-block;
height: 22px;
width: 22px;
background-size: 22px 22px;
background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+c3RhdHNfY29tbWVudDwvdGl0bGU+PHBhdGggZD0iTTUgM2MtMS4xMDUgMC0yIC44ODctMiAyLjAwNnYyLjk4OEMzIDkuMTAyIDMuODg3IDEwIDUgMTBoNmMxLjEwNSAwIDItLjg4NyAyLTIuMDA2VjUuMDA2QTEuOTk4IDEuOTk4IDAgMCAwIDExIDNINXptMCA3djNsMy0zSDV6IiBmaWxsPSIjOTk5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=);
background-position: center bottom;
vertical-align: bottom;
margin-right: -1px;
`;

const StyComNum = styled.span`
font-size: 14px;
`;

const StyComBodyList = styled.ul`
list-style: none;
margin: 0;
padding: 0;
`;

const StyCom = styled.div`
position: relative;
padding: 10px 10px 10px 0;
display: flex;
margin-left: ${props => props.isReply ? '20px': '0'};
`;

const StyComDp = styled.span`
flex: 0 0 auto;
margin-right: 10px;
cursor: pointer;
width: 40px;
height: 40px;
opacity: 1;
border-radius: 50%;
position: relative;
background-repeat: no-repeat;
background-size: cover;
background-position: 50% 50%;
box-shadow: rgba(0,0,0,.1)0 0 0 1px inset;
background-image: ${props => `url(${props.dp})`};
`;

const StyComTextCont = styled.div`
flex: 1 0;
display: flex;
flex-direction: column;
margin-right: 10px;
`;

const StyComUserTimeRow = styled.span`
font-size: 12px;
color: #999;
`;

const StyComUser = styled.a`
color: #999;
text-decoration: none;
cursor: pointer;
`;

const StyComTimeCont = styled.span`
font-size: 11px;
color: #ccc;
margin-left: 3px;
`;

const StyComTime = styled.a`
color: #999;
text-decoration: none;
cursor: pointer;
`;

const StyComText = styled.div`
word-break: break-word;
overflow-wrap: break-word;
word-wrap: break-word;
`;

const StyComP = styled.p`
margin: 0;
`;

const StyPastReplyCol = styled.div`
justify-content: space-between;
align-items: flex-end;
display: flex;
flex: 0 0 auto;
flex-direction: column;
`;

const StyPast = styled.span`
font-size: 11px;
white-space: nowrap;
color: #999;
margin-left: 10px;
`;

const StyButDiv = styled.div`
white-space: nowrap;
visibility: hidden;

${StyCom}: hover &{
  visibility: visible;
}
`;

const StyRepBut = styled.a`
font-weight: 100;
text-align: center;
vertical-align: baseline;
width: 20px;
height: 20px;
min-width: 25px;
text-decoration: none;
color: #333;
display: inline-block;
position: relative;
font-size: 11px;
padding: 2px 9px 2px 8px;
box-sizing: border-box;
line-height: 16px;
border: 1px solid #e5e5e5;
border-radius: 3px;
background-color: #fff;
background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAQAAACR313BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALRJREFUGNNjYCAexMnhkYyxTHiJUzIqIeFX/n+sUhHMEZMT/ucBIRbJMKHw3Un/s8Ew7H/Y27CTYe1h0gi9+5L+Z8Bh2v+U/3H/w74Eu0Kl30xueZ/2HxWm/o/4GqQIlv7P+3Py7CfJ/0Hw//7Ph2+cOXhl0ouMP3HzoPr/s/zP23Ar6W8C0Gn/uf+r/bf/X/liX+MhJAf+Dzx7Ju0XEl/kVTmKD/7rP9qDwudG8+J/SQaqAgBt9GUu05AvWgAAAABJRU5ErkJggg==);
cursor: pointer;
left: 1px;
background-repeat: no-repeat;
background-position: center center;
top: 0;
bottom: 0;
margin: auto 0;
`;

export default {
  StyCommentContainer,
  StyComRow,
  StyComHead,
  StyComIcon,
  StyComNum,
  StyComBodyList,
  StyCom,
  StyComDp,
  StyComTextCont,
  StyComUserTimeRow,
  StyComUser,
  StyComTimeCont,
  StyComTime,
  StyComText,
  StyComP,
  StyPastReplyCol,
  StyPast,
  StyButDiv,
  StyRepBut,
};
