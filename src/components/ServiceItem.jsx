import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import styled from 'styled-components';

export default function ServiceItem({serviceTitle, serviceDescription, serviceImage}) {
    let [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <Servicebtn>
          <h3>{serviceTitle}</h3>
    </Servicebtn>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Panel>
        <Dialog.Title>Deactivate account</Dialog.Title>
        <Dialog.Description>
            This will permanently deactivate your account
        </Dialog.Description>

        <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
        </p>

        <button onClick={() => setIsOpen(false)}>Deactivate</button>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
        </Dialog.Panel>
    </Dialog>
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
    background-image: ${props => (props.serviceImage && `url(${props.serviceImage})`)};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    


    color: white;

`;
