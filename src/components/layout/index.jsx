import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useSidebar } from '../../context/useSidebar'
import styled from 'styled-components'
import { bubble as Menu } from 'react-burger-menu'
import { IoIosClose } from 'react-icons/io';
import { Link } from 'react-router-dom'
import { useModel } from '../../context/useModel'
import Services from './../../pages/Services';
import About from './../../pages/About';
import { useAboutModel } from '../../context/useAboutModel'
import ImageOne from '../../assets/images/DSC00613.jpg'
import ImageTwo from '../../assets/images/DSC00613.jpg'
import ImageThree from '../../assets/images/DSC00613.jpg'
import ImageFour from '../../assets/images/DSC00613.jpg'
import ImageFive from '../../assets/images/DSC00613.jpg'
import ImageSix from '../../assets/images/DSC00613.jpg'

function Layout({ children }) {
  const { isOpen, setIsOpen } = useSidebar();
  const { isOpen: isAboutModelOpen, setIsOpen: setIsAboutModelOpen } = useAboutModel();
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

    {isAboutModelOpen && <ServicesModel className="dialogContainer" onClick={() => setIsAboutModelOpen(false)}>
      <ServicesBodyAbout className="dialogContent" onClick={(e) => e.stopPropagation()}>
        <header>
          <p>About us</p>
          <button onClick={() => setIsAboutModelOpen(false)}>x</button>
        </header>
        <main>
          {/* <p>about us</p> */}
          <div className='imgs' onScroll={(e) => e.stopPropagation()}>
            <img src={ImageOne} alt="" />
            <img src={ImageTwo} alt="" />
            <img src={ImageThree} alt="" />
            <img src={ImageFour} alt="" />
            <img src={ImageFive} alt="" />
            <img src={ImageSix} alt="" />

          </div>
        </main>
        <footer>
          <button onClick={() => setIsAboutModelOpen(false)}>close description</button>
        </footer>
      </ServicesBodyAbout>
    </ServicesModel>}

    {isModelOpen && <ServicesModel className="dialogContainer" onClick={() => setIsModelOpen(false)}>
      <ServicesBody className="dialogContent" onClick={(e) => e.stopPropagation()}>
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
      </ServicesBody>
    </ServicesModel>}
      

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
            <a href="#services">Services</a>
          </MenuLink>
          <MenuLink onClick={closeSidebar}>
            <a href="#about">About</a>
          </MenuLink>
          <MenuLink onClick={closeSidebar}>
            <a href="#email">Contact</a>
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


const ServicesModel = styled.div`
width: 100%;

`;

const ServicesBody = styled.div`
      position: absolute;
      width: 50%;
      height: 50%;
      background-color: #ffae00ea !important;
      color : white;
      align-items: center;
  > header  {
    
    
    
  }

  > header > button {
    background-color: red;
    color: white;
    border: none;
    padding: 0.2em 0.5em;
    border-radius: 0.2em;
    cursor: pointer;
    margin-left: 2em;


  }

  > main {
    padding: 7em;

  }

  > footer > button {
    padding: 1em 4em;
    border-radius: 2em;
    border: none;
    cursor: pointer;
    background-color: #111;
    color: white;
    :hover{
      
    }
    
    



}
`;
const ServicesBodyAbout = styled.div`
      position: absolute;
      width: 100%;
      max-width: 900px !important;
      height: 50%;
      background-color: #f5f5f5ea !important;
      color : #272727;
      align-items: center;

  > header  {
    
    
    
  }

  > header > button {
    background-color: red;
    color: white;
    border: none;
    padding: 0.2em 0.5em;
    border-radius: 0.2em;
    cursor: pointer;
    margin-left: 2em;


  }

  > main {
    overflow: hidden;
    overflow-y: scroll;
    /* Hide scrollbar for Chrome, Safari and Opera */
::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */


    /* padding: 7em; */
    .imgs {
      background-color: #1111110;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1em;
      @media only screen and (max-width: 768px) {
        grid-template-columns: 1fr;
      }
      img {
        border-radius: 1em;
        max-width: 100%;
      }
    }
  }

  > footer > button {
    padding: 1em 4em;
    border-radius: 2em;
    border: none;
    cursor: pointer;
    background-color: #111;
    color: white;
    :hover{
      
    }
    
    



}
`;



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
