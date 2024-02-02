import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Wrapper = styled(motion.div)`
  display: flex;
  width: 100vw;
  height: 65vw;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
`;

export const SlideWrap = styled.div`
  width: 60vw;
  height: 60vw;
  border-radius: 20px;
  caret-color: transparent;
`;

export const LeftSideBox = styled.div`
  width: 50vw;
  height: 50vw;
  position: relative;
  border-radius: 20px;
  left: -10vw;
`;
export const RightSideBox = styled.div`
  width: 50vw;
  height: 50vw;
  position: relative;
  border-radius: 20px;
  right: -10vw;
`;

export const Box = styled(motion.img)`
  width: 60vw;
  height: 60vw;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  ${(props) =>
    props.isBoxClicked &&
    css`
      border: 2px solid white;
    `}
`;

export const LeftImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

export const RightImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

export const Text = styled.p`
  color: white;
  font-weight: bold;
`;

export const RegenerateBtn = styled.div`
  margin-top: 2vh;
  background: #ffffff;
  border-radius: 4px;
  width: 25vw;
  height: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const boxVariants = {
  entry: (back) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
  exit: (back) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: { duration: 0.3 },
  }),
};
