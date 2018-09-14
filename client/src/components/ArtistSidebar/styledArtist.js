import styled from 'styled-components';

const LeftBar = styled.div`
position: absolute;
top: 0;
left: 0;
width: 120px;
`;

const ProfileDiv = styled.div`
position: relative;
min-height: 30px;
`;

const Avatar = styled.img`
cursor: pointer;
border-radius: 50%;
width: 120px;
height: 120px;
`;

const ArtistContentDiv = styled.div`
overflow: hidden;
font: 12px/1.4 "Lucia Grande", "Lucida Sans Unicode", "Lucida Sans", Garuda, Verdana, Tahoma, sans-serif;
color: #333;
position: relative;
height: 40px;
width: 100%;
top: 0;
margin: 0 0 10px 0;
`;

const ArtistNameStatus = styled.h3`
display: flex;
font-weight: 400;
font-size: 20px;
font-family: "Interstate", "Lucia Grande", "Lucida Sans Unicode", "Lucida Sans", Garuda, Verdana, Tahoma, sans-serif;
line-height: 1;
vertical-align: middle;
`;

const ArtistName = styled.span`
margin-right: 3px;
cursor: pointer;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
word-break: normal;
`;

const PremiumPlanIcon = styled.span`
cursor: pointer;
display: inline-block;
vertical-align: top;
overflow: hidden;
width: 12px;
height: 12px;
background-size: 12px 12px;
background-image:${props => props.premium ? 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+UHJvIFN0YXI8L3RpdGxlPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTYgMTJBNiA2IDAgMSAwIDYgMGE2IDYgMCAwIDAgMCAxMnoiIGZpbGw9IiNGNTAiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNNiA4LjA3TDMuMzU1IDkuNjRsLjY3Ni0zLTIuMzEtMi4wMyAzLjA2Mi0uMjg1TDYgMS41bDEuMjE3IDIuODI1IDMuMDYzLjI4NC0yLjMxMSAyLjAzLjY3NiAzLjAwMnoiLz48L2c+PC9zdmc+);' : 'none;'}
`;

const FollowerTracksRow = styled.div`
margin-bottom: 5px;
display: flex;
flex-wrap: wrap;
margin: 0;
padding: 0;
justify-content: flex-start;
margin-bottom: 6px;
`;

const FollowerIcon = styled.span`
cursor: pointer;
display: inline-block;
vertical-align: bottom;
width:16px;
height:16px;
background-size: 16px 16px;
background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCI+PHBhdGggZmlsbD0icmdiYSgxNTMsIDE1MywgMTUzLCAwLjcpIiBkPSJNMTguNCAxOC41bDIuNSA1IC4yLjVIMjhsLTIuMS00LjMtNC4xLTEuNXYtMi41YzEuMi0xLjEgMS44LTMuMiAxLjgtNS4xIDAtMi4xLTItMy42LTMuNS0zLjZzLTMuNSAxLjYtMy41IDMuNmMwIDEuOS41IDQgMS44IDUuMXYyLjVoLS4xbC4xLjN6Ii8+PHBhdGggZmlsbD0iIzk5OSIgZD0iTTE3LjUgMTlsLTUtMS44di0zYzEuNC0xLjIgMi0zLjggMi01LjkgMC0yLjQtMi4zLTQuMy00LTQuMy0xLjcgMC00IDEuOC00IDQuMyAwIDIuMi42IDQuNyAyIDUuOXYzbC01IDEuOEwxIDI0aDE5bC0yLjUtNXoiLz48L3N2Zz4=);
`;

const FollowerCount = styled.span`
cursor: pointer;
display:inline-block;
width:16px;
height:16px;
vertical-align: text-bottom;
position: relative;
font-size: 14px;
line-height: 20px;
color: #999;
margin: 0 10px 5px 0;
&:hover{
  color: #333;
}
`;

const TracksIcon = styled.span `
cursor: pointer;
display: inline-block;
vertical-align: bottom;
margin: 0 3px 0 20px;
width:16px;
height:16px;
background-size: 16px 16px;
background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCI+PHBhdGggZmlsbD0iIzIyMiIgZD0iTTUgMTJoMnY0SDV6TTIxIDEyaDJ2NGgtMnpNMTcgMTBoMnY4aC0yek05IDhoMnYxMkg5ek0xMyA1aDJ2MThoLTJ6Ii8+PC9zdmc+);
padding: 0;
`;

const TracksCount = styled.span`
cursor: pointer;
display:inline-block;
width:4px;
height:16px;
font-size: 14px;
line-height: 20px;
color: #999;
&:hover{
  color: #333;
}
`;

const FolButton = styled.span`
cursor: pointer;
min-width: 25px;
background-color: ${props => props.followStatus ? "white" : "#f50"};
color: ${props => props.followStatus ? "#f50" : "#fff"};
border: ${props => props.followStatus ? "1px solid #f50" : "1px solid"};
border-color: ${props => props.followStatus ? "none" : "#f50"};
font-size: 12px;
display: inline-block;
position: relative;
white-space: nowrap;
font-weight: 100;
text-align: center;
vertical-align: baseLine;
width: ${props => props.followStatus ? "60px" : "45px"};
height: 20px;
margin: 0 auto;
padding: 0;
line-height: 20px;
border-radius: 3px;
`;

export default {
  LeftBar,
  Avatar,
  ProfileDiv,
  ArtistContentDiv,
  ArtistNameStatus,
  ArtistName,
  PremiumPlanIcon,
  FollowerTracksRow,
  FollowerIcon,
  FollowerCount,
  TracksIcon,
  TracksCount,
  FolButton,
};

// padding: 2px 9px 2px 8px;
// height: 22px;
// line-height: 16px;
