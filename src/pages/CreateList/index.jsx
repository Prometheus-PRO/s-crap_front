import React, { useEffect, useState } from 'react';
import { StepHeader, StepText } from '../../components';
import {
  Container,
  Button,
  Detail,
  CardWrapper,
  Card,
  Left,
  TextWrapper,
  StyledText,
  Singer,
  CheckImage,
} from './styled';
import { useNavigate } from 'react-router-dom';

import uncheck from '../../assets/images/uncheck.svg';
import check from '../../assets/images/check.svg';

const CreateList = () => {
  const navigate = useNavigate();

  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
  };

  const handleButtonClick = () => {
    if (selectedCard !== null) {
      const nextPath = `/${selectedCard}1`;
      navigate(nextPath);
    }
  };

  return (
    <Container>
      <StepHeader step={0} />
      <StepText topText="나만의" bottomText="s'Crap 만들기" />
      <Detail>
        좋아하는 아티스트의 목소리가 가득한 플레이리스트를 만들어보세요.
      </Detail>
      <CardWrapper>
        <Card
          selected={selectedCard === 'when'}
          onClick={() => handleCardClick('when')}
        >
          <Left>
            <TextWrapper>
              <StyledText>When</StyledText>
              <Singer>상황에 따라 만들고 싶어요.</Singer>
            </TextWrapper>
          </Left>
          <CheckImage src={selectedCard === 'when' ? check : uncheck} />
        </Card>
        <Card
          selected={selectedCard === 'who'}
          onClick={() => handleCardClick('who')}
        >
          <Left>
            <TextWrapper>
              <StyledText>Who</StyledText>
              <Singer>아티스트에 따라 만들고 싶어요.</Singer>
            </TextWrapper>
          </Left>
          <CheckImage src={selectedCard === 'who' ? check : uncheck} />
        </Card>
      </CardWrapper>
      <Button disabled={selectedCard === null} onClick={handleButtonClick}>
        다음
      </Button>
    </Container>
  );
};

export default CreateList;
