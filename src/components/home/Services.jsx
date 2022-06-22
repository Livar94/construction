import React from 'react'
import styled from 'styled-components';
import SwimmingPoolImg from '../../assets/images/Prepare+Your+Landscape+for+a+Swimming+Pool+with+Rock+Excavation+in+Croton-on-Hudson+NY.jpeg'
import BasementImg from '../../assets/images/Basement-Waterproofing-300x300.jpg'
import AsphaltImg from '../../assets/images/DSC00613.jpg'
import DriveWayImg from '../../assets/images/images.jpg'
import ConcreteImg from '../../assets/images/DV07X9TXkAEBydj.jpg'
import InterLockImg from '../../assets/images/images (1).jpg'
import SodImg from '../../assets/images/rolling-out-sod.jpg'


export default function Services() {
  return (
    <ServicesHeader>
      <h1 className='container'>Services</h1>
      <ServicesContent className='container'>

        <SwimmingPool>
          <h3>swimming pool excavation</h3>
          <p>hello world</p>
        </SwimmingPool>
        <BasementWaterproofing>
          <h3>basement waterproofing</h3>
          <p>hello world</p>

        </BasementWaterproofing>
        <AsphaltRemovalExcavation>
          <h3>asphalt removal excavation</h3>
          <p>hello world</p>
        </AsphaltRemovalExcavation>
        <DrivewayExcavation>
          <h3>driveway excavation</h3>
          <p>hello world</p>
        </DrivewayExcavation>
        <ConcreteInterlockingPatioExcavation>
          <h3>concrete interlocking patio excavation</h3>
          <p>hello world</p>
        </ConcreteInterlockingPatioExcavation>
        <InterlockInstallationRemoval>
          <h3>interlock installation and removal</h3>
          <p>hello world</p>
        </InterlockInstallationRemoval>
        <SodInstallationRemoval>
          <h3>sod installation and removal</h3>
          <p>hello world</p>
        </SodInstallationRemoval>
      </ServicesContent>
    </ServicesHeader>
  )
}

const ServicesHeader = styled.div`
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 100px;
  border-radius: 1em;
    padding: 3em;

  
  > h1 {

    display: flex;
    justify-content: center;
    margin-bottom: 2em;
  }

    @media only screen and (min-width: 768px) {

  margin: 5em;
  }
`;

const ServicesContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1em;
  > div {
    padding: 3em 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1em;
    box-shadow: rgba(0, 0, 0, 0.7) 0px 100px 36px -28px inset;
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {

    grid-template-columns: 1fr;
  }
`;

const SwimmingPool = styled.div`
  background-image: url(${SwimmingPoolImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  


  color: white;
  



`;


const BasementWaterproofing = styled.div`
  background-image: url(${BasementImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;


  color: white;

`;


const AsphaltRemovalExcavation = styled.div`
  background-image: url(${AsphaltImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;


  color: white;
`;

const DrivewayExcavation = styled.div`
background-image: url(${DriveWayImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;


  color: white;

`;

const ConcreteInterlockingPatioExcavation = styled.div`
  background-image: url(${ConcreteImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;


  color: white;
`;

const InterlockInstallationRemoval = styled.div`
background-image: url(${InterLockImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;


  color: white;
`;

const SodInstallationRemoval = styled.div`
background-image: url(${SodImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;


  color: white;

`;

