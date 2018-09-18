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
min-width: 530;
`;

export default {
  OverlayContainer,
  LeftBar,
  MiddleBar,
};
