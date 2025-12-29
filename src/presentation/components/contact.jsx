import React, { useRef } from "react";
import emailjs from 'emailjs-com';
import styled from "styled-components";

const Contact = ({ handleClose }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eawv0ol",
        "template_4odmhxh",
        form.current,
        "OLO7SOcaBn-ydDM1I"
      )
      .then(
        (result) => {
          alert("message sent successfully!");
          handleClose(); // Call handleClose to close modal
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Full Name</label>
        <input type="text" name="fullName" required/>
        <label>Email</label>
        <input type="email" name="email" required/>
        <label>Phone Number</label>
        <input type="phone" name="phone" required/>
        <label>Message</label>
        <textarea name="message" required/>
        <input type="submit" value="Submit" />
      </form>
    </StyledContactForm>
  );
};

export default Contact;

// Defined styled contact form component
const StyledContactForm = styled.div`
  width: 100%;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 42px;
      padding: 10px 12px;
      outline: none;
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(255, 255, 255, 0.04);
      color: #e8ecf2;

      &:focus {
        border: 1px solid rgba(158, 252, 255, 0.6);
        box-shadow: 0 0 0 3px rgba(158, 252, 255, 0.15);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 130px;
      min-height: 130px;
      padding: 10px 12px;
      outline: none;
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(255, 255, 255, 0.04);
      color: #e8ecf2;

      &:focus {
        border: 1px solid rgba(158, 252, 255, 0.6);
        box-shadow: 0 0 0 3px rgba(158, 252, 255, 0.15);
      }
    }

    label {
      margin-top: 1rem;
      color: #c8cfdb;
    }

    input[type="submit"] {
      margin-top: 1.6rem;
      margin-bottom: 0.6rem;
      cursor: pointer;
      background: linear-gradient(120deg, #9efcff, #8c7bff);
      color: #05070f; 
      font-weight: 800;
      border: none;
      border-radius: 12px;
      height: 48px;
      letter-spacing: 0.3px;
    }
  }
`;
