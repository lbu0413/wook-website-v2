import React from "react";
import styled from "styled-components";
import { FcOpenedFolder } from "react-icons/fc";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const StyleContact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 90%;
  margin: auto;
  overflow-y: hidden;
  & > p {
    font-size: 3rem;
  }
  @media (max-width: 720px) {
    & > p {
      font-size: 1.8rem;
    }
  }
`;

const StyleContactIcons = styled.div`
  display: flex;
`;

const Contact = () => {
  return (
    <StyleContact>
      <FcOpenedFolder size={85} />
      <p>LEEWOOKB@GMAIL.COM</p>
      <p>404-642-6878</p>
      <p>Atlanta, GA</p>
      <StyleContactIcons>
        <a
          href="https://www.github.com/lbu0413"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub size={70} color="black" />
        </a>
        <a
          href="https://www.linkedin.com/in/vvooklee"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin size={70} color="black" />
        </a>
      </StyleContactIcons>
    </StyleContact>
  );
};

export default Contact;
