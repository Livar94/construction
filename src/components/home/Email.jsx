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
      <label>Name</label>
      <input type="text" name="user_name" required />
      <label>Email</label>
      <input type="email" name="user_email" required />
      <label>Phone Number</label>
      <input type="tel" name="user_number" required pattern="[0-9]{3}[0-9]{3}[0-9]{4}" />
      <label>Message</label>
      <textarea name="message" required />
      <input type="submit" value="Send" required />
    </Form>
  );
};

export default Email;

const Form = styled.form`
    display: flex;
    justify-content:center ;
    margin: 3rem;
    
`;

