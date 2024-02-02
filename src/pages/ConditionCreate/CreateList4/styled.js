import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
`;

export const Button = styled.button`
  width: 92vw;
  height: 6vh;
  background: ${(props) => (props.disabled ? '#28292a' : '#FFFFFF')};
  color: ${(props) => (props.disabled ? '#585859' : '#101112')};
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: auto;
  margin-bottom: 5vh;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const Detail = styled.div`
  display: flex;
  align-self: flex-start;
  color: #878888;
  font-size: 0.6rem;
  margin: 2.5vh 0;
  margin-left: 4vw;
  margin-bottom: 6vh;
`;

export const Image = styled.img``;
