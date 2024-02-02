import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const MusicContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const Header = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  margin: 0 4vw;
  align-items: center;
`;

export const BackIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const PlayerContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const ThumbContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ChangeButton = styled.div`
  padding: 7px 8px;
  background-color: #101112;
  border-radius: 4px;
  display: flex;
  gap: 4px;
`;

export const MicrophoneIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const ChangeText = styled.p`
  color: var(--Gray-White, #fff);
  text-align: center;
  /* caption */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.6px;
`;

export const Thumb = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 17px;
  margin-bottom: 20px;
`;

export const MusicInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
`;
export const MusicTitle = styled.p`
  color: var(--Gray-White, #fff);

  /* Headline 2 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 140% */
  letter-spacing: -0.6px;
`;
export const MusicArtist = styled.p`
  color: var(--Gray-Gray_50, #878888);
  /* Body 1 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: -0.6px;
`;
export const StyledSpan = styled.span`
  color: var(--Gray-White, #fff);
  /* subhead 1 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 137.5% */
  letter-spacing: -0.6px;
`;

export const ControllerContainer = styled.div`
  display: flex;
  padding: 0 4vw;
  width: 100%;
  box-sizing: border-box;
`;
