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
display: flex;
flex: 0 0 auto;
flex-direction: column;
justify-content: space-between;
align-items: flex-end;
`;

const StyPast = styled.span`
color: #999;
margin-left: 10px;
font-size: 11px;
white-space: nowrap;
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
};
