import styled from 'styled-components';

const OverlayContainer = styled.div`
padding-top: 20px;
padding-right: 30px;
border-right: 1px solid #999;
position: relative;
width: 840px;
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
