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
} from './styled';
import { AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import { images, texts } from './index-data.js';

const RollingBanner = () => {
  const [visible, setVisible] = useState(0);
  const [back, setBack] = useState(false);
  const imageIndex = wrap(0, images.length, visible);

  const nextPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const getSideImages = () => {
    const prevIndex = wrap(0, images.length, visible - 1);
    const nextIndex = wrap(0, images.length, visible + 1);

    return [images[prevIndex], images[imageIndex], images[nextIndex]];
  };

  const handleSideImageClick = (index) => {
    setVisible(index);
  };

  const [prevImage, currentImage, nextImage] = getSideImages();

  return (
    <Container>
      <Wrapper>
        <LeftSideBox
          onClick={() =>
            handleSideImageClick(wrap(0, images.length, visible - 1))
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
            />
          </AnimatePresence>
        </SlideWrap>
        <RightSideBox
          onClick={() =>
            handleSideImageClick(wrap(0, images.length, visible + 1))
          }
        >
          <RightImage src={nextImage} alt="next" />
        </RightSideBox>
      </Wrapper>
      <Text>{texts[imageIndex]}</Text>
    </Container>
  );
};

export default RollingBanner;
