import React, { useEffect, useState } from 'react';
import { Container, Section } from '../globalStyles';
import Modal from '../components/Modal/index';
// import {
//   ContentRow,
//   TextWrapper,
//   TopLine,
//   Heading,
//   ContentButton,
//   Subtitle,
//   ImgWrapper,
//   Img,
//   ContentColumn,
// } from './ContentStyles.js';

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Content = ({
  primary,
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  inverse,
  reverse,
  buttonOn,
  linkTo,
  fontBig,
}) => {
  const [renderButton, setRenderButton] = useState(
    buttonOn ? true : false
  );
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const initial = { opacity: 0, y: 30 };
  const animation = useAnimation();
  //   const showButton = setRenderButton(buttonOn);
  //   if (buttonOn) {
  //     setRenderButton(buttonOn);
  //   } else {
  //   }

  const { ref, inView } = useInView({ threshold: 0.2 });

  // console.log('buttonOn', buttonOn);
  // console.log('renderButton', renderButton);
  // console.log('linkTo', linkTo)
  console.log('modalOpen', modalOpen);
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);

  return (
    <Section inverse={inverse} ref={ref}>
      <Container>
        <ContentRow reverse={reverse}>
          <ContentColumn>
            <TextWrapper>
              <TopLine
                initial={initial}
                transition={{ delay: 0.3, duration: 0.6 }}
                animate={animation}
              >
                {topLine.text}
              </TopLine>
              <Heading
                initial={initial}
                transition={{ delay: 0.5, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
              >
                {headline}
              </Heading>
              <Subtitle
                initial={initial}
                transition={{ delay: 0.7, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
              >
                {description}
              </Subtitle>
              {/* <Link to={linkTo}>    */}
              {renderButton ? (
                <ContentButton
                  onClick={() => (modalOpen ? close() : open())}
                  initial={initial}
                  transition={{ delay: 1, duration: 0.6 }}
                  animate={animation}
                  inverse={inverse}
                  primary={primary}
                  buttonOn={buttonOn}
                  fontBig={fontBig}
                >
                  {buttonLabel}
                </ContentButton>
              ) : null}
              {modalOpen && (
                <Modal modalOpen={modalOpen} handleClose={close} />
              )}
              {/* </Link>  */}
            </TextWrapper>
          </ContentColumn>
          <ContentColumn
            initial={initial}
            transition={{ delay: 0.5, duration: 0.6 }}
            animate={animation}
          >
            <ImgWrapper>
              <Img
                src={img}
                alt={alt}
                whileHover={{ rotate: 2, scale: 1.02 }}
                transition={{ duration: 0.5 }}
              />
            </ImgWrapper>
          </ContentColumn>
        </ContentRow>
      </Container>
    </Section>
  );
};

export const ContentRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ reverse }) =>
    reverse ? 'row-reverse' : 'row'};
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const ContentColumn = styled(motion.div)`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  z-index: 10;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    max-width: 100% !important;
    flex-basis: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
    > h1,
    p {
      text-align: center;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  > img {
    width: 300px;
    margin-left: -3px;
  }
`;

export const ImgWrapper = styled(motion.div)`
  display: flex;
  justify-content: 'flex-end';
  max-height: 700px;
  justify-content: center;
  position: relative;
`;

export const TopLine = styled(motion.div)`
  font-size: 0.9rem;
  line-height: 16px;
  font-weight: 550;
  letter-spacing: 1.4px;
  margin-bottom: 1.3rem;
  color: #979797;
`;

export const Img = styled(motion.img)`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  object-fit: cover;
  max-height: 700px;
  z-index: 1;
`;

export const Heading = styled(motion.h2)`
  margin-bottom: 24px;
  font-size: 3rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ inverse }) => (inverse ? '#0c4577' : 'white')};

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const Subtitle = styled(motion.p)`
  max-width: 440px;
  margin-bottom: 35px;
  line-height: 24px;
  color: ${({ inverse }) => (inverse ? '#6a6a6a' : 'white')};
`;

export const ContentButton = styled(motion.button)`
  height: 3rem;
  padding: 16px 32px;
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 18px;
  letter-spacing: 1.54px;
  text-transform: uppercase;
  cursor: pointer;
  background: none;
  color: ${({ inverse }) => (inverse ? '#0c4577' : 'white')};
  border-radius: 4px;
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: 2px solid
    ${({ inverse }) => (inverse ? '#0c4577' : 'white')};
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:before {
    background: ${({ inverse }) => (inverse ? '#0c4577' : 'white')};
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:hover:before {
    height: 500%;
  }

  &:hover {
    color: ${({ inverse }) => (inverse ? 'white' : 'black')};
  }
`;
