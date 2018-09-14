import React from 'react';
import PropTypes from 'prop-types';
import descripStyle from './descripStyle';

const ShowButton = (props) => {
  const { disp, toggle } = props;
  const { StyShowButton } = descripStyle;
  const buttonText = (disp) ? <p>Show less &#9652</p> : <span>Show more &#9660</span>;
  return (
    <div>
      <StyShowButton onClick={toggle}>
        {buttonText}
      </StyShowButton>
    </div>
  );
};

ShowButton.propTypes = {
  disp: PropTypes.bool,
  toggle: PropTypes.func,
};

export default ShowButton;
