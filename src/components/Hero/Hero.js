import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
// import {
//   HeroVideo,
//   HeroSection,
//   HeroText,
//   ButtonWrapper,
//   HeroButton,
// } from './HeroStyles';

import styled from 'styled-components';
// import { Button } from '../../globalStyles';

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo src='./assets/hero.mp4' autoPlay loop muted />
      <Container>
        <MainHeading>Fundraising the modern way</MainHeading>
        <HeroText>
          Quick and fun ways to support your organization
        </HeroText>
        <ButtonWrapper>
          <Link to='signup'>
            <Button>Need a fundraiser?</Button>
          </Link>
          <HeroButton>Become a rep</HeroButton>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;

const HeroSection = styled.section`
  height: 100vh;
  background-position: center;
  background-size: cover;
  padding-top: clamp(70px, 25vh, 220px);
  box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
  display: flex;
`;

const HeroVideo = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.1)
  );
  top: 0;
  position: absolute;
  z-index: -1;
`;

const HeroText = styled.p`
  /* background: black; */
  margin-bottom: 35px;
  font-size: clamp(0.9rem, 1.5vw, 1.3rem);
  line-height: 24px;
  text-align: center;
  letter-spacing: 2px;
  color: #fff;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 0.5rem;
`;

const HeroButton = styled(Button)`
  color: black;

  &:before {
    background: #fff;
    height: 500%;
  }

  &:hover:before {
    height: 0%;
  }

  &:hover {
    color: white;
  }
`;
