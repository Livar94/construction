import React from 'react'
import styled from 'styled-components'
import Navbar from '../layout/Navbar';
import Zaldo from '../../assets/images/zaldo.jpg'
import Typewriter from 'typewriter-effect';
import {ChevronDoubleDownIcon} from '@heroicons/react/outline'

export default function Hero() {
  return (
    <HeroContainer>
        <HeroNavbarContainer>
            <Navbar />
        </HeroNavbarContainer>

        <HeroContent className='container'>
            <HeroContentText>
                <div className="location">
                    <small>Located in Greater Toronto Area, Canada</small>
                    <img src="https://www.worldatlas.com/img/flag/ca-flag.jpg" alt="" />
                </div>
                {/* <h1>CI Landscape Excavation</h1> */}
                <h1><Typewriter
                  options={{
                    strings: ['CI Landscape Excavation'],
                    autoStart: true,
                    loop: true
                  }}
                /></h1>
                <p>We specialize in work involving all types of excavation and landscape, including big or small projects.</p>
                <HeroContentBtns>
                    <HeroFreeEstimate>Get free Estimate!</HeroFreeEstimate>
                    <button>About us</button>
                </HeroContentBtns>
            </HeroContentText>
        </HeroContent>

        <HeroFooter>
            <HeroIconContainer>
                <ChevronDoubleDownIcon />
            </HeroIconContainer>
            
        </HeroFooter>

        {/* <HeroImg src={Zaldo} alt="excavator" /> */}
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
    height: 100vh;
    background-image: url(${Zaldo});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    
`;

/* const HeroImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
` */
const HeroNavbarContainer = styled.div`
    /* position: absolute; */
`

const HeroContent = styled.div`
    width: 100%;
`

const HeroFooter = styled.div`
    margin: 0 auto;
`

const HeroContentBtns = styled.div`
    display: flex;
    gap: .5em;
    margin-top: 1.5em;
    > button {
        cursor: pointer;
        border-radius: .2em;
        padding: 0.75em 1em;
        border: none;
        font-weight: 600;
        font-size: 1rem;
    }
`

const HeroFreeEstimate = styled.button`
    font-family: 'Kaushan Script', cursive;
    background-color: #FCD306;
`

const HeroIconContainer = styled.div`

   > svg {
    
        color: white;
        width: 50px;

        animation: bounce 1s infinite;

        @keyframes bounce {
        0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
        }
        50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
        }
   }
`



const HeroContentText = styled.div`
    color: white;
    width: 100%;

    > h1 {
        font-size: 5rem;
        min-width: 100%;
    }

    > p {
        font-size: 2rem;
        max-width: 750px;
    }
    > .location {
        display: flex;
        align-items: center;
        gap: 0.5em;
        > img {
            height: 15px;
        }
        > small {
            text-transform: uppercase;
            font-weight: 600;
            font-size: 1rem;
            color: #FCD306;
            letter-spacing: .2em;
            text-decoration: underline;
            text-decoration-style: wavy;
        }
    }

    @media only screen and (max-width: 768px) {

        > h1 {
            font-size: 3rem;
        }

        > p {
            font-size: 1rem;
        }
    }
   
`