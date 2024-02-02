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
export const Image = styled.img``;

export const Card = styled.div`
  background: #28292a;
  border-radius: 8px;
  width: 20vw;
  height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ selected }) =>
    selected &&
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
  display: flex;
  justify-content: space-between;
`;
