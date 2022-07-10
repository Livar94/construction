import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Dirt from '../../assets/images/pngwing.com.png'
import { AiFillThunderbolt } from 'react-icons/ai'

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent className="container">

        <FooterLinksContainer>
          <FooterLinksIntro>
            <h2>CI Landscape Excavation</h2>
            <p>We specialize in work involving all types of excavation and landscape, including big or small projects.</p>
          </FooterLinksIntro>

          <FooterLinks>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contac">Contact</Link></li>
          </FooterLinks>
        </FooterLinksContainer>

        <small>
          <AiFillThunderbolt />
          created by holmweb
        </small>
      </FooterContent>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
    background: #0a0a0a url(${Dirt}) center center repeat;
    padding: 3em 0;
   
`

const FooterContent = styled.div`
    background-color: #111;
    padding: 2em 3em;
    border-radius: 1em;
    color: white;

    display: flex;
    flex-direction: column;
    gap: 2em;

    > small {
      display: flex;
      align-items: center;
      align-self: center;
    }
`

const FooterLinksContainer = styled.div`
  list-style: none;
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    gap: 1.5em;
    flex-direction: column;
  }
`

const FooterLinksIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  max-width: 500px;
`

const FooterLinks = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 1em;
  a {
    color: white;
    text-decoration: none;
    :hover {
      color: grey;
    }
  }
`
