import React, { useState } from 'react';
import { FaRProject, FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
// import {
//   Nav,
//   NavbarContainer,
//   NavLogo,
//   NavIcon,
//   MobileIcon,
//   NavMenu,
//   NavLinks,
//   NavItem,
//   Span,
// } from './NavbarStyles.js';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { data } from '../../data/NavbarData';
import styled from 'styled-components';
import { Container } from '../../globalStyles';

const Navbar = () => {
  const [show, setShow] = useState(false);

  let history = useHistory();
  let location = useLocation();

  const handleClick = () => {
    setShow(!show);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const closeMobileMenu = (to, id) => {
    if (id && location.pathname === '/') {
      scrollTo(id);
    }

    history.push(to);
    setShow(false);
  };

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav>
        <NavbarContainer className="">
          <NavLogo to="/">
            <NavIcon src="./assets/quickFundLogo.png" alt="logo" />
            <H4>
              Quick <u>Fun</u>d Consulting{' '}
            </H4>
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {show ? <FaTimes /> : <CgMenuRight />}
          </MobileIcon>
          <NavMenu show={show}>
            {data.map((el, index) => (
              <NavItem key={index}>
                <NavLinks
                  onClick={() => closeMobileMenu(el.to, el.id)}
                >
                  {el.text}
                </NavLinks>
              </NavItem>
            ))}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;

export const Nav = styled.nav`
  /* background: linear-gradient(
    90deg,
    rgb(28, 27, 27) 0%,
    rgb(26, 23, 23) 100%
  ); */
  background: black;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  width: 100%;

  transition: background-color 0.3s ease-in;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: start;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  z-index: 50;
`;

export const NavIcon = styled.img`
  margin-right: 1rem;
  width: 3rem;
`;

export const MobileIcon = styled.div`
  display: none;
  z-index: 50;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  width: 100%;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: fixed;
    padding-top: 30%;
    top: 0;
    left: 0;
    opacity: ${({ show }) => (show ? 1 : 0)};
    visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
    transform: translateY(${({ show }) => (show ? '0' : '-10px')});
    transition: opacity 0.5s ease;
    background-color: #071c2f;
  }

  > li:first-child {
    margin-left: auto;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled.span`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  &:hover {
    color: #c8c9d8;
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;

export const H4 = styled.h4`
  width: 500px;
  text-decoration: none;
  font-weight: inherit;
`;
