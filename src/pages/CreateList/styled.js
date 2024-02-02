import styled, { css } from 'styled-components';

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
  margin-bottom: 8vh;
`;

export const Text = styled.p`
  color: #ffffff;
  font-size: 0.6rem;
  margin-bottom: 1.5vh;
`;
export const Image = styled.img`
  width: 7vh;
  margin: 0 2vw;
`;
export const CheckImage = styled.img`
  margin: 0 2vw;
`;
export const Card = styled.div`
  background: #28292a;
  border-radius: 8px;
  width: 92vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${(props) =>
    props.selected &&
    css`
      background: linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.05),
          rgba(255, 255, 255, 0.05)
        ),
        #28292a;
      border: 1px solid #ffffff;
    `}
`;

export const StyledText = styled.p`
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
`;

export const CardWrapper = styled.div`
  width: 92vw;
  height: 22vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Singer = styled.p`
  font-size: 0.5rem;
  color: #878888;
  margin-top: 0.5vh;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2vw;
`;

export const Left = styled.div`
  display: flex;
`;
