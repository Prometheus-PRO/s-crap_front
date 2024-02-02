import React from 'react';
import { Container, StyledText } from './styled';

const StepText = ({ topText, bottomText }) => {
  return (
    <Container>
      <StyledText>{topText}</StyledText>
      <StyledText>{bottomText}</StyledText>
    </Container>
  );
};

export default StepText;
