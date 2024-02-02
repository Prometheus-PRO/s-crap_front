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
  width: 34vw;
`;

export const Card = styled.div`
  background: #28292a;
  border-radius: 8px;
  width: 44vw;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5vh;

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

export const CardWrapper = styled.div`
  width: 92vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
