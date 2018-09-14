import styled from 'styled-components';

const StyDescDiv = styled.div`
max-height: ${props => props.disp ? "500px" : "140px"};
font-size: 14px;
font-family: "Interstate","Lucida Grande","Lucida Sans Unicode","Lucida Sans",Garuda,Verdana,Tahoma,sans-serif;
font-weight: 100;
overflow: hidden;
position: relative;
`;

const StySongP = styled.p`
margin: 0 0 10px;
`;

const StyShowButton = styled.a`
margin: 16px 0 20px;
color: #333;
position: relative;
`;

export default {
  StyDescDiv,
  StySongP,
  StyShowButton,
};
