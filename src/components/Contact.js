import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import styled from "styled-components";
import Confirmation from "./Confirmation";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  .inner {
    margin-top: 20px;
    width: 75%;
    max-width: 400px;

    @media (min-width: 992px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  .form {
    align-items: center;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 20px;
    justify-items: center;

    @media (min-width: 992px) {
      grid-template-columns: 2fr 1fr;
      grid-gap: 30px;
      min-height: 50px;
    }
  }
`;

const NameEmail = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  align-items: center;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  ::placeholder {
    font-size: 16px;
    font-weight: normal;
    @media (min-width: 992px) {
      font-size: 16px;
    }
  }
`;

const Subject = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  align-items: center;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    .subject {
      padding: 0 1%;
    }
  }
  ::placeholder {
    font-size: 16px;
    font-weight: normal;
    @media (min-width: 992px) {
      font-size: 16px;
    }
  }
`;

const Refer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  align-items: center;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 3fr;
    gap: 10px;
    .subject {
      padding: 0 1%;
    }
  }
  ::placeholder {
    font-size: 16px;
    font-weight: normal;
    @media (min-width: 992px) {
      font-size: 16px;
    }
  }
`;

const Input = styled.input`
  background: #cccccc;
  border-radius: 10px;
  width: 100%;
  outline: none;
  padding: 0 2%;
  border: 0;
  height: 100px;
  font-size: 16px;
  margin-top: 30px;
  min-height: 50px;
  @media (max-width: 768px) {
    height: 50px;
    min-height: 30px;
    margin: 5px 5px;
  }
  @media (min-width: 992px) {
    border-radius: 5px;
    font-size: 16px;
    height: 40px;
    line-height: 1.6em;
    margin-top: 0.5em;
    min-height: 30px;
    width: auto;
  }
  ::placeholder {
    font-size: 16px;
    font-weight: normal;
    @media (min-width: 992px) {
      font-size: 16px;
    }
  }
`;

const Message = styled.textarea`
  font-family: inherit;
  font-size: 16px;
  background: #cccccc;
  border: 0;
  border-radius: 10px;
  resize: none;
  width: 100%;
  height: 400px;
  padding: 2%;
  line-height: 2em;
  outline: none;
  overflow: auto;
  margin-top: 0.5em;
  margin-bottom: 1em;
  min-height: 100px;
  @media (max-width: 768px) {
    height: 150px;
    min-height: 50px;
  }
  @media (min-width: 992px) {
    ${"" /* width: -webkit-fill-available; */}
    border-radius: 5px;
    margin-top: 0.5em;
    font-size: 16px;
    padding: 1%;
    height: 10em;
    line-height: 1.6em;
  }
  ::placeholder {
    font-size: 16px;
    font-weight: normal;
    @media (min-width: 992px) {
      font-size: 16px;
    }
  }
`;

const Send = styled.input`
  background-color: #b1b1b1;
  border-radius: 25px;
  color: #000;
  cursor: pointer;
  font-size: 16px;
  padding: 5px 20px;

  &:hover,
  &:focus {
    background-color: #858585;
    color: #fff;
    font-weight: bold;
    outline: none;
    text-transform: uppercase;
    transition: color.2s cubic-bezier(0.3, 0, 0.45, 1),
      background-color 0.2s cubic-bezier(0.3, 0, 0.45, 1);
  }
  @media (min-width: 992px) {
    border: 2px solid #000;
    border-radius: 25px;
    padding: 5px 20px;
    font-size: 16px;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
`;

const Contact = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    subject: "",
    number: "",
    refer: "",
    message: "",
  });
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (param) => (e) => {
    setInfo({ ...info, [param]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, number, refer, message } = info;
    const templateParams = {
      from_name: name,
      to_name: "Faded, Ink.",
      email,
      number: number,
      subject: subject,
      refer: refer,
      message_html: message,
    };

    emailjs
      .send(
        "service_w7c5scn",
        "template_d1b74nt",
        templateParams,
        "lBFJTD6z68VNG7Ahx"
      )
      .then(
        (result) => {
          setShowConfirm(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // setInfo({
    //   name: "",
    //   email: "",
    //   subject: "",
    //   message: "",
    // });
  };

  return (
    <Main id="contact">
      <div className="inner">
        <div className="contact-form">
          <p className="section-title">Inquiries</p>
        </div>
        {showConfirm ? (
          <Confirmation className="fade-out" />
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <NameEmail>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={info.name}
                onChange={handleChange("name")}
                required
              />
              <Input
                type="email"
                placeholder="Email"
                value={info.email}
                onChange={handleChange("email")}
                required
              />
            </NameEmail>
            <Subject>
              <Input
                type="text"
                placeholder="Tattoo or Haircut"
                className="subject"
                value={info.subject}
                onChange={handleChange("subject")}
                required
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                className="number"
                value={info.number}
                onChange={handleChange("number")}
                required
              />
            </Subject>
            <Refer>
              <Input
                type="text"
                placeholder="Referred By"
                className="refer"
                value={info.refer}
                onChange={handleChange("refer")}
                required
              />
            </Refer>
            <Message
              placeholder="Your Inquiry"
              value={info.message}
              onChange={handleChange("message")}
              required
            />
            <Button>
              <Send type="submit" value="Send" className="dark-button" />
            </Button>
          </form>
        )}
      </div>
    </Main>
  );
};

export default Contact;
