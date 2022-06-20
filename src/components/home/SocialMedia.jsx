import React from 'react'
import styled from 'styled-components'
import { MdEmail, MdPhoneEnabled } from 'react-icons/md';
import { RiInstagramFill } from 'react-icons/ri';

/* Phone Number: (416)-918-5324
Email: cilandscapeexcavation@gmail.com
Instagram: landscapeexcavation */

export default function SocialMedia() {
  return (
    <SMContainer>
        <SMContent className="container">
            {/*  */}
            <SMContentItem>
                <SMContentItemImg>
                    <RiInstagramFill />
                </SMContentItemImg>
                <SMContentItemText>
                    @landscapeexcavation
                </SMContentItemText>
            </SMContentItem>
            {/*  */}
            <SMContentItem>
                <SMContentItemImg>
                    <MdPhoneEnabled />
                </SMContentItemImg>
                <SMContentItemText>
                    (416)-918-5324
                </SMContentItemText>
            </SMContentItem>
            {/*  */}
            <SMContentItem>
                <SMContentItemImg>
                    <MdEmail />
                </SMContentItemImg>
                <SMContentItemText>
                    cilandscapeexcavation@gmail.com
                </SMContentItemText>
            </SMContentItem>
        </SMContent>
    </SMContainer>
  )
}

const SMContainer = styled.div`
    background-color: #111111;
    padding: 3em 0;
`
const SMContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    color: white;
`
const SMContentItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const SMContentItemImg = styled.div`
    svg {
        font-size: 3rem;
    }
`
const SMContentItemText = styled.p`
`
