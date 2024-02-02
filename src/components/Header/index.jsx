import React from 'react';
import { Container, Image } from './styled';

import logo from '../../assets/images/logo.svg';
import profile from '../../assets/images/profile.svg';

const Header = () => {
  return (
    <Container>
      <Image src={logo} alt="headerlogo" />
      <Image src={profile} alt="profile" />
    </Container>
  );
};

export default Header;
