import React from 'react';
import PropTypes from 'prop-types';
import descripStyle from './descripStyle';

const ShowButton = (props) => {
  const { disp, toggle } = props;
  const { StyShowButton } = descripStyle;
  const buttonText = (disp) ? `Show less ${String.fromCharCode(9652)}` : `Show more ${String.fromCharCode(9662)}`;
  return (
    <div>
      <StyShowButton onClick={toggle} disp={disp}>
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
