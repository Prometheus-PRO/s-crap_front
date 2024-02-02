import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Image,
  Info,
  Wrapper,
  NoneWrapper,
  AddBtn,
  Arrow,
  ButtonWrapper,
  MyBtn,
  OtherBtn,
} from './styled';
import { Header, Search, RollingBanner } from '../../components';
import { useRecoilValue } from 'recoil';
import { playListState } from '../../store/atoms';

import none from '../../assets/images/none.svg';
import pick from '../../assets/images/pick.svg';
import add from '../../assets/images/add_button.svg';
import arrow from '../../assets/images/arrow.svg';
import selected_my from '../../assets/images/selected_my.svg';
import others from '../../assets/images/others.svg';

const MyList = () => {
  const navigate = useNavigate();
  const playlist = useRecoilValue(playListState);

  const handleAddBtnClick = () => {
    navigate('/create');
  };

  const handleOtherBtnClick = () => {
    navigate('/otherslist');
  };

  return (
    <Container>
      <Header />
      <Search info="노래, 아티스트를 입력하세요." />
      {playlist.length === 0 ? (
        <NoneWrapper>
          <Image src={none} alt="none" />
          <Info>
            AI 커버 플레이리스트
            <br />
            s'Crap을 만들어보세요.
          </Info>
        </NoneWrapper>
      ) : (
        <Wrapper>
          <Image src={pick} alt="pick" />
          <RollingBanner />
        </Wrapper>
      )}
      <Arrow src={arrow} alt="arrow" />
      <AddBtn src={add} alt="add" onClick={handleAddBtnClick} />
      <ButtonWrapper>
        <MyBtn>
          <img src={selected_my} />
        </MyBtn>
        <OtherBtn onClick={handleOtherBtnClick}>
          <img src={others} />
        </OtherBtn>
      </ButtonWrapper>
    </Container>
  );
};

export default MyList;
