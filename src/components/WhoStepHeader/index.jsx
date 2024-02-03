import React from 'react';
import { Container, Image } from './styled';

import prev from '../../assets/images/prev.svg';
import step1 from '../../assets/images/wstep1.svg';
import step2 from '../../assets/images/wstep2.svg';
import step3 from '../../assets/images/wstep3.svg';
import cancle from '../../assets/images/cancle.svg';

const StepHeader = ({ step }) => {
  const stepImages = [prev, step1, step2, step3];
  const stepImage = stepImages[step] || null;

  return (
    <Container>
      <Image src={prev} alt="prev" />
      {step !== 0 && stepImage && (
        <Image src={stepImage} alt={`step ${step}`} />
      )}
      <Image src={cancle} alt="cancle" />
    </Container>
  );
};

export default StepHeader;
