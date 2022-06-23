import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

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
    <Form ref={form} onSubmit={sendEmail}>
      <label></label>
      <input type="text" placeholder='First Name' name="user_name" required />
      <input type="text" placeholder='Last Name' name="user_name" required />
      <label></label>
      <input type="email" placeholder='Email' name="user_email" required />
      <label></label>
      <input type="tel" name="user_number" placeholder='Phone Number' required pattern="[0-9]{3}[0-9]{3}[0-9]{4}" />
      <label></label>
      <textarea name="message" required placeholder='Message'/>
      <input type="submit" className='btn' value="Send" required />
      {/* <Button></Button> */}
      
    </Form>
  );
};

export default Email;

const Form = styled.form`
  /* display: flex;
  justify-content:center ; */
  > input {
    width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 2em;
  :hover{
        background-color: lightgray;
        color: black;
    }
  
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

// // const Button = styled.button`
// //   padding: 0.5em 3em;
// //   border: none;
// //   border-radius: 2em;
// //   background-color: black;
// //   :hover{
// //         background-color: lightgray;
// //         color: black;
// //     }
// //   cursor: pointer;
// //   > input {
// //     color: white;
// //     background-color: black;
// //     cursor: pointer;
// //    
// //   }

// `;

