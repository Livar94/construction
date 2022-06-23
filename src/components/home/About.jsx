import React from 'react'
import styled from 'styled-components'
import aboutImg from '../../assets/images/image0.jpeg'
import Heel from '../../assets/images/heeel.png'
import Circle from '../../assets/images/circle.png'

export default function About() {
  return (
    <Container>
    <Header>
        <AboutContent className="container">
            
            <AboutLeft>
                <h2>About</h2>
                <p>CI Landscape and Excavation is a family owned business with over 25 years of experience. <br /> We specialize in work involving all types of excavation and landscape, including big or small projects. <br />Our main priority is to provide our customers with high quality work and satisfaction.</p>
                <Button>Read more</Button>
            </AboutLeft>
            <AboutRight>
                <AboutImage src={aboutImg} alt="" />
            </AboutRight>
            
            <PatternImg src={Heel} />
        </AboutContent>
    </Header>

    <PatternImgTwo src={Circle} />

    </Container>
  )
}

const Container = styled.div`
    position: relative;
`

const Header = styled.div`
    margin: 1em;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; 
    border-radius: 1em;
    padding: 3em;
    
    @media only screen and (min-width: 768px) {

        margin: 5em;
    }
    background-color: white;
    overflow: hidden;
    position: relative;
    z-index: 9998 !important;
`;

const PatternImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: .2;
`

const PatternImgTwo = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    margin-left: -250px;
    z-index: -1 !important;
    opacity: .1;
    width: 1000px;
    @media only screen and (max-width: 768px) {

display: none;
}
`

const AboutContent = styled.div`
    /* display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em; */
    
    display: flex;
    justify-content: center;
    padding: 1em;
    align-items: center;
    
    @media only screen and (max-width: 768px) {
        gap: 3em;
        flex-direction: column;
    }
`;

const AboutLeft = styled.div`
    > p {
        margin-top: 2em;
        margin-bottom: 2em;
    }

    position: relative;
    z-index: 2;

`;

const AboutRight = styled.div`
    overflow: hidden;
    display: flex;
    justify-content: center;
`;

const AboutImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 4em;
    



`;

const Button = styled.button`
    padding: 1em 2em;
    border-radius: 1em;
    border: none;
    background-color: black;
    color: white;
    font-weight: bold;
    cursor: pointer;
    :hover{
        background-color: lightgray;
        color: black;
    }
    transition: all 0.5s ease-in-out;
    



`;


