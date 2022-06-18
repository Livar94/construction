import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/images/logo.png'

export default function Navbar() {
  return (
    <NavbarHeader>
      <NavbarContent className="container">
        <NavLogoContainer>
          <NavLogo src={Logo} />
        </NavLogoContainer>


        <NavLinks>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </NavLinks>



      </NavbarContent>
    </NavbarHeader>
  )
}

const NavbarHeader = styled.header`
  padding: 1em 0;
`

const NavbarContent = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const NavLogoContainer = styled.nav`
  overflow: hidden;
  height: 100px;
`

const NavLogo = styled.img`
  width: 100%;
  height: 100%;
  
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
`


