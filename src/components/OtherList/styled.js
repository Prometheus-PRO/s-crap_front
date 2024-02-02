import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 92vw;
  padding: 1vh 4vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2.5vh 0;
`;

export const Image = styled.img`
  margin-right: 2vw;
`;

export const List = styled.div`
  position: relative;
  width: 92vw;
  height: 16vh;
  display: flex;
  margin-bottom: 2vh;
`;

export const TextBox = styled.div`
  display: flex;
`;

export const ColorText = styled.span`
  font-weight: bold;
  line-height: 20px;
  font-size: 1.1rem;
  ${(props) =>
    props.made === '보라' &&
    css`
      color: purple;
    `}

  ${(props) =>
    props.made === '블루' &&
    css`
      color: blue;
    `}

  ${(props) =>
    props.made === '옐로' &&
    css`
      color: yellow;
    `}
`;

export const StyledText = styled.div`
  color: white;
  font-weight: bold;
  line-height: 20px;
  font-size: 1.1rem;
`;
export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Left = styled.div`
  display: flex;
  width: 80vw;
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Singer = styled.div`
  color: #878888;
  margin-top: 0.4vh;
`;
export const AddButton = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 20vw;
  height: 5vh;
  background: #28292a;
  border-radius: 4px;
  color: #ffffff;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
