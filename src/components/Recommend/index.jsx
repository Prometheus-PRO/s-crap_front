import React from 'react';
import { useRecoilState } from 'recoil';
import { situationState } from '../../store/atoms';
import {
  Container,
  Text,
  StyledText,
  Image,
  Card,
  CardWrapper,
} from './styled';

import sleep from '../../assets/images/sleep.svg';
import some from '../../assets/images/some.svg';
import travel from '../../assets/images/travel.svg';
import rain from '../../assets/images/rain.svg';

const Recommend = () => {
  const [situation, setSituation] = useRecoilState(situationState);
  return (
    <Container>
      <Text>AI 추천 상황</Text>
      <CardWrapper>
        <Card
          onClick={() => setSituation('잠잘 때')}
          selected={situation === '잠잘 때'}
        >
          <Image src={sleep} alt="sleep" />
          <StyledText>잠잘 때</StyledText>
        </Card>
        <Card
          onClick={() => setSituation('썸탈 때')}
          selected={situation === '썸탈 때'}
        >
          <Image src={some} alt="some" />
          <StyledText>썸탈 때</StyledText>
        </Card>
        <Card
          onClick={() => setSituation('여행갈 때')}
          selected={situation === '여행갈 때'}
        >
          <Image src={travel} alt="travel" />
          <StyledText>여행갈 때</StyledText>
        </Card>
        <Card
          onClick={() => setSituation('비올 때')}
          selected={situation === '비올 때'}
        >
          <Image src={rain} alt="rain" />
          <StyledText>비올 때</StyledText>
        </Card>
      </CardWrapper>
    </Container>
  );
};

export default Recommend;
