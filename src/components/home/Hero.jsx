import React from 'react'
import styled from 'styled-components'
import Navbar from '../layout/Navbar';
import Zaldo from '../../assets/images/zaldo.jpg'
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <HeroContainer>
        <HeroNavbarContainer>
            <Navbar />
        </HeroNavbarContainer>

        <HeroContent className='container'>
            <HeroContentText>
                <small>Located in Greater Toronto Area, Canada</small>
                {/* <h1>CI Landscape Excavation</h1> */}
                <h1><Typewriter
                  options={{
                    strings: ['CI Landscape Excavation'],
                    autoStart: true,
                    loop: true,
                  }}
                /></h1>
                <p>We specialize in work involving all types of excavation and landscape, including big or small projects.</p>
            </HeroContentText>
        </HeroContent>

        <div className=""></div>

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

    > small {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 1rem;
        color: #FCD306;
        letter-spacing: .2em;
    }
`