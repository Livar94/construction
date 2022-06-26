import React from 'react'
import styled from 'styled-components';
import SwimmingPoolImg from '../../assets/images/Prepare+Your+Landscape+for+a+Swimming+Pool+with+Rock+Excavation+in+Croton-on-Hudson+NY.jpeg'
import BasementImg from '../../assets/images/Basement-Waterproofing-300x300.jpg'
import AsphaltImg from '../../assets/images/DSC00613.jpg'
import DriveWayImg from '../../assets/images/images.jpg'
import ConcreteImg from '../../assets/images/DV07X9TXkAEBydj.jpg'
import InterLockImg from '../../assets/images/images (1).jpg'
import SodImg from '../../assets/images/rolling-out-sod.jpg'
import Heel from '../../assets/images/heeel.png'
import ServiceItem from '../ServiceItem';


export default function Services() {
  const services = [{serviceTitle:'swimming pool excavation', serviceDescription:'hello world', serviceImage:SwimmingPoolImg}, 
  {serviceTitle:'basement waterproofing', serviceDescription:'hello world', serviceImage:BasementImg},
  {serviceTitle:'asphalt removal excavation', serviceDescription:'hello world', serviceImage:AsphaltImg},
  {serviceTitle:'driveway excavation', serviceDescription:'hello world', serviceImage:DriveWayImg},
  {serviceTitle:'concrete interlocking patio excavation', serviceDescription:'hello world', serviceImage:ConcreteImg},
  {serviceTitle:'interlock installation and removal', serviceDescription:'hello world', serviceImage:InterLockImg},
  {serviceTitle:'sod installation and removal', serviceDescription:'hello world', serviceImage:SodImg},
  ]
  return (
    <ServicesHeader>
      <h1 className='container'>Services</h1>
      <ServicesContent className='container'>
        {services.map(service => <ServiceItem serviceTitle={service.serviceTitle} serviceDescription={service.serviceDescription} serviceImage={service.serviceImage} />)}
        <PatternImg src={Heel} />
      </ServicesContent>
    </ServicesHeader>
  )
}

const ServicesHeader = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 1em;
  padding: 3em;
  margin: 1em;
  
  > h1 {
    position: relative;
    z-index: 99;
    display: flex;
    justify-content: center;
    margin-bottom: 1em;
  }

    @media only screen and (min-width: 768px) {

  margin: 5em;
  }

  overflow: hidden;
    position: relative;
    background-color: white;
    z-index: 9000 !important;
`;

const PatternImg = styled.img`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    opacity: .4;
`

const ServicesContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1em;

  @media only screen and (max-width: 768px) {

    grid-template-columns: 1fr;
  }
`;
