import React, { useEffect } from 'react';
import { StepHeader, StepText, Search, Recommend } from '../../components';
import { Container, Button, Detail } from './styled';
import { useRecoilValue } from 'recoil';
import { situationState } from '../../store/atoms';
import { useNavigate } from 'react-router-dom';

const CreateList = () => {
  const situation = useRecoilValue(situationState);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (situation !== 'none') {
      navigate('/step2');
    }
  };

  useEffect(() => {}, [situation]);

  return (
    <Container>
      <StepHeader step={1} />
      <StepText
        topText="어떤 상황의 플레이리스트를"
        bottomText="만들고싶나요?"
      />
      <Detail>어울리는 상황을 선택해주세요.</Detail>
      <Search info="상황을 입력하세요. ex) 등교할 때" />
      <Recommend />
      <Button onClick={handleButtonClick} disabled={situation === 'none'}>
        다음
      </Button>
    </Container>
  );
};

export default CreateList;
