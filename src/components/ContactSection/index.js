import React from 'react'
import emailjs from 'emailjs-com'
import {
    ContactContainer, 
    ContactWrapper,  
    Column1,  
    TopLine, 
    ContactForm,
    ContactInput, 
    ContactLabel, 
    ContactTextArea,
    ContactButton} from './ContactElements'

const ContactSection = ( {id, topLine} ) => {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('email_service', 'email_template', e.target, 'user_AQPCb8RSjn9CeiMvepRSP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }

    return (
        <ContactContainer id={id}>
            <ContactWrapper>
                <Column1>
                    <TopLine>{topLine}</TopLine>
                        <ContactForm onSubmit={sendEmail}>
                            <ContactInput type="hidden"/>
                            <ContactLabel>Name</ContactLabel>
                            <ContactInput type="text" placeholder='Name' name='Name'/>
                            <ContactLabel>Email</ContactLabel>
                            <ContactInput type="email" placeholder='Email' name='Email'/>
                            <ContactLabel>Message</ContactLabel>
                            <ContactInput type="text" placeholder='Subject' name='Subject'/>
                            <ContactLabel>Subject</ContactLabel>
                            <ContactTextArea rows='4' placeholder='Type your message here.' name='Message'/>
                            <ContactButton type="submit" value="Send"/> 
                        </ContactForm>
                </Column1>
            </ContactWrapper>
        </ContactContainer> 
    )
}

export default ContactSection