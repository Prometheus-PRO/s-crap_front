import React, { useEffect } from 'react';
import { WhoStepHeader, StepText, RollingBanner } from '../../components';
import { Container, Button, Detail } from './styled';
import { useRecoilValue } from 'recoil';
import { songState } from '../../store/atoms';
import { artistState } from '../../store/atoms';
import { useNavigate } from 'react-router-dom';

const Who3 = () => {
  const songs = useRecoilValue(songState);
  const artist = useRecoilValue(artistState);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/wholist');
  };

  useEffect(() => {}, [songs]);

  return (
    <Container>
      <WhoStepHeader step={3} />
      <StepText topText="s'Crap의 커버 사진을" bottomText="선택해주세요." />
      <Detail>
        선택한 상황, 노래, 아티스트에 어울리는 커버를 추천해드려요.
      </Detail>
      <RollingBanner flag={3} />
      <Button onClick={handleButtonClick}>다음</Button>
    </Container>
  );
};

export default Who3;
