import React from 'react';
import styledComponents from './styledArtist';

const PremiumPlan = (props) => {
  const { PremiumPlanIcon } = styledComponents;
  const { premium } = props;
  // console.log(props.premium);
  if (premium) {
    return (
      <PremiumPlanIcon premium />
    );
  }
  return (
    <PremiumPlanIcon />
  );
};

export default PremiumPlan;
