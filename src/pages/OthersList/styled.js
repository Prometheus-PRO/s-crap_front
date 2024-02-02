import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Image = styled.img`
  margin-bottom: 1.5vh;
`;

export const Info = styled.p`
  color: #878888;
  line-height: 28px;
`;

export const Wrapper = styled.div`
  margin-top: 3vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AddBtn = styled.img`
  position: absolute;
  bottom: 16vh;
  right: 5vw;
`;

export const Arrow = styled.img`
  position: absolute;
  bottom: 22vh;
  right: 18vw;
`;

export const ButtonWrapper = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 60px;
  width: 65vw;
  height: 6vh;
  display: flex;
  justify-content: space-around;
  margin-top: auto;
  margin-bottom: 5vh;
`;

export const MyBtn = styled.div`
  width: 30vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OtherBtn = styled.div`
  background: #28292a;
  border-radius: 28px;
  width: 30vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
