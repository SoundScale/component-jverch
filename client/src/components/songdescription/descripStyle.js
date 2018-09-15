import styled from 'styled-components';

const StyDescDiv = styled.div`
max-height: ${props => props.disp ? "1000px" : "130px"};
font-size: 14px;
font-family: "Interstate","Lucida Grande","Lucida Sans Unicode","Lucida Sans",Garuda,Verdana,Tahoma,sans-serif;
font-weight: 100;
overflow: hidden;
position: relative;
margin-bottom 10px;
`;

const StySongP = styled.p`
margin: 0 0 10px;
`;

const StyShowButton = styled.a`
cursor: pointer;
font-size: 13px;
margin: 16px 0 20px;
color: ${props => props.disp ? "#333" : "#999"};
position: relative;
&:hover{
  color: #333;
}
box-sizing: border-box; 
`;

export default {
  StyDescDiv,
  StySongP,
  StyShowButton,
};
