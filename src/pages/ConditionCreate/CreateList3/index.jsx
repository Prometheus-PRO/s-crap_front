import React, { useEffect } from 'react';
import {
  StepHeader,
  StepText,
  Search,
  RecommendArtist,
} from '../../../components';
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
import { songState } from '../../../store/atoms';
import { artistState } from '../../../store/atoms';
import { useNavigate } from 'react-router-dom';
import list from '../../../assets/images/list.svg';

const CreateList3 = () => {
  const songs = useRecoilValue(songState);
  const artist = useRecoilValue(artistState);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (artist !== 'none') {
      navigate('/when4');
    }
  };

  useEffect(() => {}, [songs]);

  return (
    <Container>
      <StepHeader step={3} />
      <StepText topText="어떤 아티스트가" bottomText="불러주면 좋겠나요?" />
      <Detail>선택한 노래에 어울리는 아티스트를 추천해드려요.</Detail>
      <Search info="아티스트 이름을 검색하세요." />
      <RecommendArtist />
      <ButtonWrapper>
        <Button onClick={handleButtonClick} disabled={artist === 'none'}>
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

export default CreateList3;
