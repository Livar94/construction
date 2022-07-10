import React from 'react'
import styled from 'styled-components'
import aboutImg from '../../assets/images/image0.jpeg'
import Heel from '../../assets/images/heeel.png'
import Circle from '../../assets/images/circle.png'
import { useAboutModel } from '../../context/useAboutModel'

import Img1 from '../../assets/images/images.jpg'
import Img2 from '../../assets/images/Swimming-Pool-Excavation.jpg'
import Img3 from '../../assets/images/image0.jpeg'
import Img4 from '../../assets/images/rolling-out-sod.jpg'


export default function About() {
    const { isOpen, setIsOpen } = useAboutModel(); 

  return (
    <Container >
    <Header id='about'>
        <AboutContent className="container">
            
            <AboutLeft>
                <h2>About</h2>
                <p>CI Landscape and Excavation is a family owned business with over 25 years of experience. <br /> We specialize in work involving all types of excavation and landscape, including big or small projects. <br />Our main priority is to provide our customers with high quality work and satisfaction.</p>
                <Button onClick={() => setIsOpen(true)}>Read more</Button>
            </AboutLeft>
            <AboutRight>
                {/* <AboutImage src={aboutImg} alt="" /> */}
                <img src={Img1} alt="" className='img1' />
                <img src={Img2} alt="" className='img2' />
                <img src={Img3} alt="" className='img3' />
                <img src={Img4} alt="" className='img4' />
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
    z-index: 9000 !important;
`;

const PatternImg = styled.img`
    position: absolute;
    top: -50%;
    left: 0;
    width: 100%;
    opacity: .55;
`

const PatternImgTwo = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    margin-left: -250px;
    z-index: -1 !important;
    opacity: .075;
    width: 1000px;
    @media only screen and (max-width: 768px) {

display: none;
}
`

const AboutContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    
    
    padding: 1em;
    align-items: center;
    
    @media only screen and (max-width: 768px) {
        gap: 3em;
        flex-direction: column;
        display: flex;
        justify-content: center;
    }
`;

const AboutLeft = styled.div`
    > p {
        margin-top: 2em;
        margin-bottom: 2em;
        font-size: 0.8rem;
    }

    position: relative;
    z-index: 2;

`;

const AboutRight = styled.div`
/*     overflow: hidden;
    display: flex;
    justify-content: center; */
    /* new code */

    position: relative;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
    align-items: center;

    img {
        border-radius: 0.375rem;
        animation: beat .9s infinite alternate;
    }


            
    

  transform-origin: center;





  @keyframes beat{

    to { transform: scale(1.05); }

    }

    .img1 {
        width: 25%;
        align-self: flex-end;
        justify-self: end;
    }

    .img2 {
        width: 50%;
        box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    }

    .img3 {
        width: 80%;
        box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        justify-self: end;
    }

    .img4 {
        width: 33.333333%;
        align-self: flex-start;
    }

`;

const AboutImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 4em;
    position: relative;
    z-index: 99;
    @media only screen and (max-width: 768px) {
        border-radius: 1em;
    }



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


