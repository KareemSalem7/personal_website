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
        <label>Phone Number (xxx-xxx-xxxx)</label>
        <input type="phone" name="phone" pattern="\d{3}-\d{3}-\d{4}" required/>
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
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      margin-bottom: 1rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      background: white; 
      color: black; 
      font-weight: bold;
      border: none;
    }
  }
`;
