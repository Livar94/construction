import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useSidebar } from '../../context/useSidebar'
import styled from 'styled-components'
import { bubble as Menu } from 'react-burger-menu'
import { IoIosClose } from 'react-icons/io';

function Layout({ children }) {
  const { isOpen, setIsOpen } = useSidebar();
  return (
    <LayoutContainer>
      {isOpen && <MenuContainer>
        <Menu isOpen={isOpen} right styles={{
          bmMenu: {
            background: '#FCD306',
            padding: '2.5em 1.5em 0',
            fontSize: '1.15em',
            
          },
          bmMorphShape: {
            fill: '#FCD306'
          },
          bmItemList: {
            color: '#b8b7ad',
            padding: '0.8em'
          },
          bmItem: {
            display: 'block',
            color: '#111'
          },
        }}>
          <MenuBtn className='crossbtn' onClick={() => setIsOpen(prev => !prev)} ><IoIosClose /></MenuBtn>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
        </Menu>
      </MenuContainer>}
      {/* <Navbar /> */}
        {children}
      <Footer />
    </LayoutContainer>
  )
}

export default Layout

const MenuBtn = styled.button`
  background: transparent;
  padding: 0;
  border: 0;
  font-size: 2.5rem;
  color: white;
  margin-left: -10px;
`

const MenuContainer = styled.div`
/*   left: 0;
  position: absolute; */
`

const LayoutContainer = styled.div`
  width: 100vw;
  overflow: hidden;
`