import './ContactForm.css';
import React, { useRef} from 'react';
import emailjs from '@emailjs/browser';

const ContactForm= (props) => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qmh6xlb', 'template_1fz3ssl', form.current, 'h-dxRi59cHx0a-DM5')
      .then((result) => {
          console.log(result.text);
          props.onSetIsSubmit();
          e.target.reset();

      }, (error) => {
          console.log(error.text);
      });

      
  };

  return (
    <form ref={form} onSubmit={sendEmail}  className="form">
      <div className='form-container'>
         <div className='ditails'>
             <div className='form-name'>
                 <label>Your Name</label>
                 <input type="text" name="user_name" className='user-name'/>
             </div>
             <div className='form-email'>
                  <label>Your Email</label>
                 <input type="email" name="user_email" className='user-email' />
             </div>
         </div>
         <div className='form-message'>
             <label>Message</label>
             <textarea name="message" className='text'/>
         </div>
         <div className='form-send'>
             <input type="submit" value="SEND" className='send-button' />
         </div>
     </div>  
    </form>
    
  );
};


export default ContactForm