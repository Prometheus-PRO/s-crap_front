import React from 'react';
import {
  Container,
  Image,
  ListWrapper,
  List,
  Left,
  TextWrapper,
  StyledText,
  TextBox,
  ColorText,
  Singer,
  AddButton,
} from './styled';
import purple from '../../assets/images/purple.svg';
import blue from '../../assets/images/blue.svg';
import yellow from '../../assets/images/yellow.svg';

const OtherList = () => {
  const otherData = [
    {
      id: 1,
      imgSrc: purple,
      condition: '잠이 오지 않을 때,',
      singer: '아이유',
      made: '보라',
    },
    {
      id: 2,
      imgSrc: blue,
      condition: '언제든지,',
      singer: '윈터',
      made: '블루',
    },
    {
      id: 3,
      imgSrc: yellow,
      condition: '등교할 때,',
      singer: '조이',
      made: '옐로',
    },
  ];
  return (
    <Container>
      <ListWrapper>
        {otherData.map((list) => (
          <List key={list.id}>
            <Left>
              <Image src={list.imgSrc} alt={list.imgSrc} />
              <TextWrapper>
                <StyledText>{list.condition}</StyledText>
                <TextBox>
                  <ColorText made={list.made}>{list.singer}</ColorText>
                  <StyledText>가 불러주는</StyledText>
                </TextBox>
                <Singer>by.{list.made}</Singer>
              </TextWrapper>
            </Left>
            <AddButton>추가하기</AddButton>
          </List>
        ))}
      </ListWrapper>
    </Container>
  );
};

export default OtherList;
