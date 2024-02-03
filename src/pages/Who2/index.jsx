import React, { useEffect } from 'react';
import {
  WhoStepHeader,
  StepText,
  Search,
  RecommendSong,
} from '../../components';
import {
  Container,
  Button,
  Detail,
  ListButton,
  Image,
  ButtonWrapper,
  Badge,
} from './styled';
import { useRecoilValue } from 'recoil';
import { songState } from '../../store/atoms';
import { useNavigate } from 'react-router-dom';
import list from '../../assets/images/list.svg';

const Who2 = () => {
  const songs = useRecoilValue(songState);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (songs.length !== 0) {
      navigate('/who3');
    }
  };

  useEffect(() => {}, [songs]);

  return (
    <Container>
      <WhoStepHeader step={2} />
      <StepText
        topText="이무진님이 불러주길 바라는"
        bottomText="노래를 담아주세요."
      />
      <Detail>선택한 아티스트 보이스에 어울리는 노래를 추천해드려요.</Detail>
      <Search info="노래, 가수를 입력하세요." />
      <RecommendSong flag={2} />
      <ButtonWrapper>
        <Button onClick={handleButtonClick} disabled={songs.length === 0}>
          다음
        </Button>
        <ListButton>
          {songs.length > 0 && <Badge>{songs.length}</Badge>}
          <Image src={list} />
        </ListButton>
      </ButtonWrapper>
    </Container>
  );
};

export default Who2;
