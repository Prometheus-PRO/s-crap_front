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
  width: 70vw;
  height: 6vh;
  background: ${(props) => (props.disabled ? '#28292a' : '#FFFFFF')};
  color: ${(props) => (props.disabled ? '#585859' : '#101112')};
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const Detail = styled.div`
  display: flex;
  align-self: flex-start;
  color: #878888;
  font-size: 0.6rem;
  margin: 2.5vh 0;
  margin-left: 4vw;
`;

export const ListButton = styled.div`
  position: relative;
  width: 18vw;
  background: #878888;
  border-radius: 12px;
  height: 6vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img``;
export const ButtonWrapper = styled.div`
  display: flex;
  width: 92vw;
  justify-content: space-between;
  margin-top: auto;
  margin-bottom: 5vh;
`;
export const Badge = styled.div`
  width: 1vw;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  color: #28292a;
  border-radius: 50%;
  padding: 0.3rem 0.6rem;
  font-size: 0.8rem;
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
`;
