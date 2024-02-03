import React, { useState } from 'react';
import {
  Container,
  Wrapper,
  SlideWrap,
  Box,
  LeftSideBox,
  RightSideBox,
  LeftImage,
  RightImage,
  Text,
  boxVariants,
  RegenerateBtn,
} from './styled';
import { AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import { images, images2, images3, texts, sing } from './index-data.js';
import rg from '../../assets/images/regenerate.svg';

const RollingBanner = ({ flag }) => {
  const [visible, setVisible] = useState(0);
  const [back, setBack] = useState(false);
  const [isBoxClicked, setIsBoxClicked] = useState(false);

  // flag에 따라 다른 이미지 배열을 선택
  const currentImages =
    flag === 'coverImg' ? images : flag === 3 ? images3 : images2;
  const imageIndex = wrap(0, currentImages.length, visible);

  const nextPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === currentImages.length - 1 ? 0 : prev + 1));
  };

  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
  };

  const getSideImages = () => {
    const prevIndex = wrap(0, currentImages.length, visible - 1);
    const nextIndex = wrap(0, currentImages.length, visible + 1);

    return [
      currentImages[prevIndex],
      currentImages[imageIndex],
      currentImages[nextIndex],
    ];
  };

  const handleSideImageClick = (index) => {
    setVisible(index);
  };

  const handleBoxClick = () => {
    console.log(`Selected box index: ${visible}`);
    setIsBoxClicked((prev) => !prev);
  };

  const [prevImage, currentImage, nextImage] = getSideImages();

  return (
    <Container>
      <Wrapper>
        <LeftSideBox
          onClick={() =>
            handleSideImageClick(wrap(0, currentImages.length, visible - 1))
          }
        >
          <LeftImage src={prevImage} alt="prev" />
        </LeftSideBox>
        <SlideWrap>
          <AnimatePresence custom={back}>
            <Box
              custom={back}
              variants={boxVariants}
              src={currentImage}
              initial="entry"
              animate="center"
              exit="exit"
              key={visible}
              onClick={handleBoxClick}
              isBoxClicked={isBoxClicked}
            />
          </AnimatePresence>
        </SlideWrap>
        <RightSideBox
          onClick={() =>
            handleSideImageClick(wrap(0, currentImages.length, visible + 1))
          }
        >
          <RightImage src={nextImage} alt="next" />
        </RightSideBox>
      </Wrapper>
      {flag === 'coverImg' || flag === 3 ? (
        <RegenerateBtn>
          <img src={rg} alt="rg" />
        </RegenerateBtn>
      ) : (
        <Text>
          {texts[imageIndex]}{' '}
          <span style={{ color: getColorByIndex(imageIndex) }}>
            {sing[imageIndex]}
          </span>
          로 s'Crap
        </Text>
      )}
    </Container>
  );
};

const getColorByIndex = (index) => {
  const colors = ['#8D1AFF', '#FE8EC5', 'skyblue'];
  return colors[index % colors.length];
};

export default RollingBanner;
