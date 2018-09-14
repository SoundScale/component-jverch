import React from 'react';
import descripStyle from './descripStyle';
import ShowButton from './showButton.jsx';


class SongDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };
    this.displayToggle = this.displayToggle.bind(this);
  }

  displayToggle() {
    this.setState((prevState) => {
      return {
        display: !prevState.display,
      };
    });
  }

  render() {
    const { desc } = this.props;
    const { display } = this.state;
    const { StyDescDiv, StySongP } = descripStyle;
    return (
      <div>
        <StyDescDiv disp={display}>
          <StySongP>
            {desc}
          </StySongP>
          
        </StyDescDiv>
        <ShowButton disp={display} toggle={this.displayToggle} />
      </div>
    );
  }
}

export default SongDescription;
