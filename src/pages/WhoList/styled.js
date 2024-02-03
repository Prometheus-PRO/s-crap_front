import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  //   position: relative;
`;
export const LinearGradient = styled.div`
  width: 100%;
  //   flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 0px;
  max-height: 400px;
  min-height: 300px;
`;
export const Raw = styled.div`
  display: flex;
  margin: 0 4vw;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  color: #fff;
  max-width: 200px;
  -webkit-text-stroke-width: 1;
  -webkit-text-stroke-color: rgba(0, 0, 0, 0.2);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px; /* 141.667% */
  letter-spacing: -0.6px;
`;

export const ColorText = styled.span`
  color: #fe8ec5;
  max-width: 200px;
  -webkit-text-stroke-width: 1;
  -webkit-text-stroke-color: rgba(0, 0, 0, 0.2);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px; /* 141.667% */
  letter-spacing: -0.6px;
`;

export const PlayButton = styled.img``;

export const ListContainer = styled.div`
  //   flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 25px;
  gap: 16px;
  margin-bottom: 83px;
`;

export const Item = styled.div`
  border-radius: 8px;
  background: var(--Gray-Gray_90, #28292a);
  padding: 12px;
  display: flex;
  gap: 16px;
  align-items: center;
  width: 100%;
`;
export const MusicThumb = styled.img`
  border-radius: 4px;
  width: 60px;
  height: 60px;
`;

export const MusicInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const MusicTitle = styled.h1`
  color: var(--Gray-White, #fff);

  /* subhead 1 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 137.5% */
  letter-spacing: -0.6px;
`;

export const MusicArtist = styled.h2`
  color: var(--Gray-Gray_50, #878888);

  /* caption */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  letter-spacing: -0.6px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const MusicAiArtist = styled.h2`
  color: var(--Gray-White, #fff);
  /* subhead 2 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.6px;
`;

export const BackButton = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: var(--Gray-Black, #101112);
`;

export const BottomContainer = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BottomMenu = styled.div`
  display: flex;
  padding: 5px;
  align-items: flex-start;
  gap: 4px;
  border-radius: 60px;
  background: #1c1d1e;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.5);
`;

export const BottomItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: #fff;
  text-align: center;

  /* subhead 1 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 137.5% */
  letter-spacing: -0.6px;

  padding: 12px 20px;
  gap: 10px;
  border-radius: 28px;
  background: var(--Gray-Gray_90, #28292a);
`;
