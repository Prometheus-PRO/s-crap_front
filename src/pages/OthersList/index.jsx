import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  AddBtn,
  Arrow,
  ButtonWrapper,
  MyBtn,
  OtherBtn,
} from './styled';
import { Header, Search, OtherList } from '../../components';

import add from '../../assets/images/add_button.svg';
import arrow from '../../assets/images/arrow.svg';
import selected_others from '../../assets/images/selected_others.svg';
import my from '../../assets/images/my.svg';

const OthersList = () => {
  const navigate = useNavigate();

  const handleMyBtnClick = () => {
    navigate('/');
  };

  const handleAddBtnClick = () => {
    navigate('/create');
  };

  return (
    <Container>
      <Header />
      <Search info="노래, 아티스트를 입력하세요." />
      <OtherList />
      <Arrow src={arrow} alt="arrow" />
      <AddBtn src={add} alt="add" onClick={handleAddBtnClick} />
      <ButtonWrapper>
        <MyBtn onClick={handleMyBtnClick}>
          <img src={my} alt="my" />
        </MyBtn>
        <OtherBtn>
          <img src={selected_others} alt="others" />
        </OtherBtn>
      </ButtonWrapper>
    </Container>
  );
};

export default OthersList;
