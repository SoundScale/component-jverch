import styled from 'styled-components';

const OverlayContainer = styled.div`
padding-top: 20px;
padding-right: 30px;
border-right: 1px solid #999;
position: relative;
max-width: 840px;
min-width: 650;
font: 12px/1.4 "Lucida Grande","Lucida Sans Unicode","Lucida Sans",Garuda,Verdana,Tahoma,sans-serif;
`;

const LeftBar = styled.div`
position: absolute;
top: 0;
left: 0;
max-width: 120px;
`;

const MiddleBar = styled.div`
padding-left: 150px;
max-width: 680px;
min-width: 460px;
margin
`;

const FooterBar = styled.div`
margin-top: 20px;
border-top: 1px solid #f2f2f2;
position: relative;
`;

const FooterImg = styled.div`
display: block;
max-width: 680px;
height: 14px;
position: relative;
top: -8px;
left: 0;
background: url(https://a-v2.sndcdn.com/assets/images/stopper-9d4f27a.png) center center no-repeat;
`;

export default {
  OverlayContainer,
  LeftBar,
  MiddleBar,
  FooterBar,
  FooterImg,
};
