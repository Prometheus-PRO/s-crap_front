import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 92vw;
  padding: 1vh 4vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 2.5vh 0;
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
  margin-top: 1.5vh;
  color: #ffffff;
  font-size: 0.8rem;
`;

export const CardWrapper = styled.div`
  width: 92vw;
  height: 45vh;
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
`;

export const Left = styled.div`
  display: flex;
`;
