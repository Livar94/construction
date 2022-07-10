import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/images/logo.png'
import { IoIosMenu } from 'react-icons/io';
import { useSidebar } from '../../context/useSidebar'

export default function Navbar() {
  const { setIsOpen } = useSidebar();

  return (
    <NavbarHeader>
      <NavbarContent className="container">
        <NavLogoContainer>
          <NavLogo src={Logo} />
        </NavLogoContainer>


        <NavLinks>

          <li><a href="#about">About</a></li>

          <li><a href="#services">Services</a></li>
          
          <li><a href="#email">Contact</a></li>
        </NavLinks>
        
        <MenuBtn onClick={() => setIsOpen(prev => !prev)}>
          <IoIosMenu />
        </MenuBtn>

        



      </NavbarContent>
    </NavbarHeader>
  )
}


const MenuBtn = styled.button`
  background: transparent;
  padding: 0;
  border: 0;
  font-size: 2.5rem;
  color: white;
  @media only screen and (min-width: 768px) {

    display: none;
  }
`

const NavbarHeader = styled.header`
  padding: 1em 0;
  background: linear-gradient(#181818, #ffffff10);
`

const NavbarContent = styled.nav`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
`

const NavLogoContainer = styled.nav`
  overflow: hidden;
  height: 100px;
  width: 100px;
`

const NavLogo = styled.img`
max-width: 100%;
height: 100%;
  object-fit: cover;
`

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1em;
  letter-spacing: 0.1em;
  > li > a {
    color: white !important;
    text-decoration: none;
  }

  @media only screen and (max-width: 768px) {

    display: none;
}

  > li {
    a:hover {
      color: black !important;
    }
  }
`


