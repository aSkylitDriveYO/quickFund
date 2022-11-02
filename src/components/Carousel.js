import React, { useState } from 'react';
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
} from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { data, sliderSettings } from '../data/CarouselData';
import { Row, Heading, Section, TextWrapper } from '../globalStyles';
import Slider from 'react-slick';
import styled from 'styled-components';
// import {
// 	ButtonContainer,
// 	ReviewSlider,
// 	ImageWrapper,
// 	CarouselImage,
// 	CardButton,
// } from './CarouselStyles';

const Carousel = () => {
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <Section
      margin='auto'
      maxWidth='1280px'
      padding='50px 70px'
      inverse
    >
      <Row justify='space-between' margin='1rem' wrap='wrap'>
        <Heading width='auto' inverse>
          Find more about us
        </Heading>
        <ButtonContainer>
          <IconContext.Provider
            value={{ size: '3rem', color: '#1d609c' }}
          >
            <FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
            <FaArrowCircleRight onClick={sliderRef?.slickNext} />
          </IconContext.Provider>
        </ButtonContainer>
      </Row>

      <ReviewSlider {...sliderSettings} ref={setSliderRef}>
        {data.map((el, index) => (
          <ImageWrapper key={index}>
            <CarouselImage src={el.image} />
            <TextWrapper
              size='1.1rem'
              margin='0.4rem 0 0'
              weight='bold'
            >
              {el.title}
            </TextWrapper>
            <TextWrapper
              size='0.9rem'
              margin='0.7rem'
              color='#4f4f4f'
            >
              {el.description}
            </TextWrapper>
            <CardButton>Learn More</CardButton>
          </ImageWrapper>
        ))}
      </ReviewSlider>
    </Section>
  );
};

export default Carousel;

export const CarouselImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
  vertical-align: middle;
`;

export const ImageWrapper = styled.div`
  width: 90%;
  display: flex !important;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  outline: none;
  height: 430px;

  @media screen and (min-width: 440px) {
    border: 1px solid #bebebe;
  }
`;

export const ButtonContainer = styled(Row)`
  & svg {
    margin: 0 1rem;
    cursor: pointer;
  }

  & svg:hover {
    opacity: 0.7;
    transition: opacity 0.2s ease-in;
  }
  @media screen and (max-width: 960px) {
    margin: 0 auto;
  }
`;

export const ReviewSlider = styled(Slider)`
  width: 100%;

  .slick-track {
    display: flex;
    padding: 30px;
    gap: 3rem;
  }
  .slick-slide {
    display: flex;
    justify-content: center;
    margin-bottom: 1;
    outline: none;
  }

  .slick-list {
    overflow: hidden;
  }
`;

export const CardButton = styled.button`
  background-color: #1d609c;
  font-size: 1.3rem;
  padding: 5px 10px;
  color: #fff;
  cursor: pointer;
  width: 100%;
  font-weight: 600;
  margin: auto 0 0 0;
  border: none;
  border-radius: 0 0 10px 10px;

  &:hover {
    background-color: #112f4a;
    transition: background-color 0.2s ease-in;
  }
`;
