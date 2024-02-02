import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: red;
`;

export const Wrapper = styled(motion.div)`
  display: flex;
  width: 100vw;
  height: 55vw;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  background: green;
`;

export const SlideWrap = styled.div`
  margin: 0px 30px;
  width: 50vw;
  height: 50vw;
  border-radius: 20px;
  caret-color: transparent;
`;

export const LeftSideBox = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  margin-right: 20vw;
  overflow: hidden;
`;
export const RightSideBox = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  margin-left: 20vw;
  overflow: hidden;
`;

export const Box = styled(motion.img)`
  position: absolute;
  width: 50vw;
  height: 50vw;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export const LeftImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left;
  clip-path: inset(0 0 0 50%);
  border-radius: 20px;
`;

export const RightImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left;
  clip-path: inset(0 50% 0 0);
  border-radius: 20px;
`;

export const Text = styled.p`
  color: white;
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
    transition: { duration: 0.5 },
  }),
};
