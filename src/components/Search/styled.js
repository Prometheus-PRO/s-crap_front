import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 92vw;
  height: 6vh;
  background: #28292a;
  position: relative;
  border-radius: 7px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #28292a;
`;

export const Image = styled.img`
  width: 8%;
  background: #28292a;
`;

export const SearchInput = styled.input`
  background: #28292a;
  width: 80%;
  height: 3vh;
  font-size: 0.8rem;
  color: #878888;
  border: none;
  outline: none;
`;
