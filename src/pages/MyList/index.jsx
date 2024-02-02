import React from 'react';
import { Container, Image, Info } from './styled';
import { Header, Search, Toggle } from '../../components';

import none from '../../assets/images/none.svg';

const MyList = () => {
  return (
    <Container>
      <Header />
      <Search />
      <Image src={none} alt="none" />
      <Info>
        플레이리스트를
        <br />
        &nbsp;만들어보세요.
      </Info>
      <Toggle />
    </Container>
  );
};

export default MyList;
