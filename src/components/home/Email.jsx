import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import Dots from '../../assets/images/dots.png'

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yaxartf', 'template_9fgw59j', form.current, 'pybKblkW4NXLnR0E9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Header>
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