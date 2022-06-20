import React from 'react'
import styled from 'styled-components'
import aboutImg from '../../assets/images/image0.jpeg'


export default function About() {
  return (
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
            

        </AboutContent>
        
    </Header>
  )
}

const Header = styled.div`
    margin: 1em;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 100px;   
    border-radius: 1em;
    padding: 3em;
    margin: 5em;
`;

const AboutContent = styled.div`
    /* display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em; */
    display: flex;
    justify-content: center;
    padding: 1em;
    align-items: center;

`;

const AboutLeft = styled.div`
    > p {
        margin-top: 2em;
        margin-bottom: 2em;
    }

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


