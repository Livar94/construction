import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useSidebar } from '../../context/useSidebar'
import styled from 'styled-components'
import { bubble as Menu } from 'react-burger-menu'
import { IoIosClose } from 'react-icons/io';
import { Link } from 'react-router-dom'
import { useModel } from '../../context/useModel'

function Layout({ children }) {
  const { isOpen, setIsOpen } = useSidebar();
  const { isOpen: isModelOpen, setIsOpen: setIsModelOpen, modelData, setModelData} = useModel();

  const closeSidebar = () => setIsOpen(prev => !prev);

  return (
    <LayoutContainer>
      
{/*       <Dialog open={isModelOpen} onClose={() => setIsModelOpen(false)} >
        <Dialog.Panel>
        <Dialog.Title>{modelData?.serviceTitle}</Dialog.Title>
        <Dialog.Description>
            This will permanently deactivate your account
        </Dialog.Description>

        <p>
            {modelData?.serviceDescription}
        </p>

        <button onClick={() => setIsModelOpen(false)}>Close</button>
        </Dialog.Panel>
    </Dialog> */}

    {isModelOpen && <div className="dialogContainer" onClick={() => setIsModelOpen(false)}>
      <div className="dialogContent" onClick={(e) => e.stopPropagation()}>
        <header>
          <p>{modelData?.serviceTitle}</p>
          <button onClick={() => setIsModelOpen(false)}>x</button>
        </header>
        <main>
          <p>{modelData?.serviceDescription}</p>
        </main>
        <footer>
          <button onClick={() => setIsModelOpen(false)}>close description</button>
        </footer>
      </div>
    </div>}
      

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
            color: '#f1f1f1'
          },
        }}>
          <MenuBtn className='crossbtn' onClick={() => setIsOpen(prev => !prev)} ><IoIosClose /></MenuBtn>

          
          <MenuLink onClick={closeSidebar}>
            <Link to="/">Home</Link>
          </MenuLink>
          <MenuLink onClick={closeSidebar}>
            <Link to="/services">Services</Link>
          </MenuLink>
          <MenuLink onClick={closeSidebar}>
            <Link to="/about">About</Link>
          </MenuLink>
          <MenuLink onClick={closeSidebar}>
            <Link to="/contact">Contact</Link>
          </MenuLink>
          
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
  position: relative;
  .dialogContainer {
    
    z-index: 9999;
    background-color: #0000008b;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    /* z-50 fixed top-0 left-0 w-screen h-screen backdrop-blur-sm bg-[#e9e9e9c4] flex justify-center items-center */
    .dialogContent {
      background-color: whitesmoke;
      border-radius: 1em;
      padding: 1em;
      max-width: 500px;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: .75em;
      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        p {
          font-size: 1.25rem;
        }
      }
      main {
        p {

        }
      }
      footer {
        button {

        }
      }

    }
  }
`

const MenuLink = styled.div`
  a {
    text-decoration: none;
    color: white;
    background-color: #111;
    padding: 0.75em 2em;
    display: block;
    margin: 1em 0;
    border-radius: 1em;
    display: flex;
    justify-content: center;
  }
`
