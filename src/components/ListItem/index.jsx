import React from 'react';
import { Container, Image } from './styled';

import play from '../../assets/images/play.svg';
import profile from '../../assets/images/profile.svg';

const ListItem = () => {
  return (
    <Container>
      <Image src={play} alt="headerlogo" />
      <Image src={profile} alt="profile" />
    </Container>
  );
};

export default ListItem;
