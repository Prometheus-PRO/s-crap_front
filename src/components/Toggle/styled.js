import styled, { css } from 'styled-components';

export const BtnWrapper = styled.div`
  position: relative; /* 부모 요소의 position을 relative로 설정 */
  display: flex;
  z-index: 0;
`;

export const CheckBox = styled.input`
  display: none;
`;

export const ButtonLabel = styled.label`
  z-index: 10;
  width: 12rem;
  height: 3rem;
  border-radius: 2em;
  background-color: ${({ latestSort }) => (latestSort ? 'blue' : 'green')};
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;

  ::before,
  ::after {
    content: '';
    position: absolute;
    width: 6rem;
    height: 3rem;
    border-radius: 2rem;
    transition: all 0.2s ease-in-out;
  }

  ::before {
    left: 0;
    background-color: ${({ latestSort }) => (latestSort ? 'green' : 'blue')};
  }

  ::after {
    right: 0;
    background-color: ${({ latestSort }) => (latestSort ? 'blue' : 'green')};
  }

  ${(props) =>
    props.latestSort &&
    css`
      ::before {
        left: 6rem;
        background-color: ${'blue'};
      }

      ::after {
        right: 6rem;
        background-color: ${'green'};
      }
    `}
`;
