import React from "react";
import styled from "styled-components";

const Main = styled.div`
  max-width: 900px;
  min-height: 5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  border: 2px solid #dedede;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 1.5rem 2rem;
  margin: 2em auto 0 auto;
  width: 86%;
  @media (min-width: 992px) {
    margin: 1em auto 0 auto 0;
    width: 79%;
  }
  opacity: 1;
`;

const Text = styled.p`
  text-align: center;
  color: #dedede;
  margin: 0;
  font-size: 15px;
  @media (min-width: 992px) {
    font-size: 15px;
  }
  &:last-of-type {
    margin-top: 0.5em;
  }
`;

const Confirmation = () => {
  return (
    <Main>
      <Text>Message sent successfully.</Text>
      <Text>Thanks for reaching out! I'll get back to you shortly.</Text>
    </Main>
  );
};

export default Confirmation;
