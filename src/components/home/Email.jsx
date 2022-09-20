import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import Dots from '../../assets/images/dots.png'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7k9j0fr', 'template_h4cm0ck', form.current, 'LXSoZXNY8iJQkwaqN')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          toast("Thank you for your message! We will be in touch with you as soon as possible.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Header id='email'>
      <FormEmail className='container'>
        <FormInfo>
          <h2>Contact us</h2>
          <p>Message us for more information about services or free estimation.</p>
        </FormInfo>
        <Form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder='First Name' name="user_name" required />
          <input type="text" placeholder='Last Name' name="user_name" required />
          <input type="email" placeholder='Email' name="user_email" required />
          <input type="tel" name="user_number" placeholder='Phone Number' required pattern="[0-9]{3}[0-9]{3}[0-9]{4}" />
          <textarea name="message" required placeholder='Message...'/>
          <input type="submit" className='btn' value="Send" required />
        </Form>
      </FormEmail>
      <PatternImg src={Dots} />
      <ToastContainer />
    </Header>
    
    
  );
};

export default Email;

const Header = styled.div`
    margin: 1em;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;  
    border-radius: 1em;
    padding: 3em;
  position: relative;
    overflow: hidden;
    @media only screen and (min-width: 768px) {

margin: 5em;

position: relative;
}
`;

const PatternImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: .05;
`

const FormInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1em;
`;

const Form = styled.form`
  /* display: flex;
  justify-content:center ; */
    display: flex;
    flex-direction: column;
    align-items: center;
   
  > input, textarea {
      max-width: 500px;
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      border: 1px solid #ccc;
      border-radius: 2em;

    
  :hover{
        background-color: lightgray;
        color: black;
    }
  
  }

  > textarea {
    min-height: 150px;
  }

  > .btn {
      background-color: black;
      color: white;
      cursor: pointer;
     :hover{
        background-color: lightgray;
        color: black;
     }
  }

  


  
  
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const FormEmail = styled.div`
    position: relative;
    z-index: 99;
`;