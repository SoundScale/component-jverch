import styled from 'styled-components';

const OverlayContainer = styled.div`
padding-top: 20px;
padding-right: 30px;
border-right: 1px solid #999;
position: relative;
width: 840px;
font: 12px/1.4 "Lucida Grande","Lucida Sans Unicode","Lucida Sans",Garuda,Verdana,Tahoma,sans-serif;
`;

const LeftBar = styled.div`
position: absolute;
top: 0;
left: 0;
width: 120px;
`;

const MiddleBar = styled.div`
padding-left: 150px;
width: 680px;
`;

export default {
  OverlayContainer,
  LeftBar,
  MiddleBar,
};
