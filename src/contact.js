import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_28bzskd', 'template_pjxxp4j', form.current, '9wjK2_Z6hqcSPZV9tIui0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <p>Please send me an email to get in touch or ask any questions.</p>
      <input type="text" placeholder="Full Name" name="user_name" required/>
      <br></br><br></br>
      
      <input type="email" placeholder="Email Address" name="user_email" required/>
      <br></br><br></br>

      <input type="text" placeholder="Subject" name="subject"/>
      <br></br><br></br>
      
      <textarea name="message" placeholder="Message" required/>
      <br></br><br></br>

      <input type="submit" value="Send" />
    </form>
  );
};