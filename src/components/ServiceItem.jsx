import { useState } from 'react'
import styled from 'styled-components';
import { useModel } from '../context/useModel';

export default function ServiceItem({serviceTitle, serviceDescription, serviceImage}) {
    const { setIsOpen, setModelData} = useModel();
  return (
    <>
    <Servicebtn serviceImage={serviceImage} onClick={() => {
        setModelData({ serviceTitle, serviceDescription})
        setIsOpen(true)
    }}>
          <h3>{serviceTitle}</h3>
    </Servicebtn>


  </>
  )
}

const Servicebtn = styled.div`
    position: relative;
    z-index: 99;
    padding: 3em 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1em;
    box-shadow: rgba(0, 0, 0, 0.7) 0px 100px 36px -28px inset;
    cursor: pointer;
    background-image: ${props => (`url(${props.serviceImage})`)};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
    


    color: white;

`;
