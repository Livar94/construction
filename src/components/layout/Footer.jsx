import React from 'react'
import styled from 'styled-components'
import Dirt from '../../assets/images/pngwing.com.png'

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent className="container">

        {/* <small>created by holmweb</small> */}
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
    padding: 5em 1em;
    border-radius: 1em;
`
