import React, { useState } from 'react';
import { Container, Wrapper, Image, SearchInput } from './styled';

import searchImg from '../../assets/images/searchImg.svg';

const Search = ({ info }) => {
  const [inputText, setInputText] = useState('');

  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  return (
    <Container>
      <Wrapper>
        <Image src={searchImg} alt="searchImage" />
        <SearchInput
          type="text"
          placeholder={info}
          value={inputText}
          onChange={handleChange}
        />
      </Wrapper>
    </Container>
  );
};

export default Search;
