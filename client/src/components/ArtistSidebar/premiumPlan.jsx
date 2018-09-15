import React from 'react';
import PropTypes from 'prop-types';
import styledComponents from './styledArtist';

const PremiumPlan = (props) => {
  const { StyPremiumPlanIcon } = styledComponents;
  const { premium } = props;
  // console.log(props.premium);
  if (premium) {
    return (
      <StyPremiumPlanIcon premium />
    );
  }
  return (
    <StyPremiumPlanIcon />
  );
};

PremiumPlan.propTypes = {
  premium: PropTypes.number,
};

export default PremiumPlan;
