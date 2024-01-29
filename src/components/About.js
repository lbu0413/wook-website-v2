import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiNodeDotJs,
  SiMongodb,
  SiReact,
  SiRedux,
  SiVueDotJs,
  SiWebpack,
  SiEslint,
  SiFirebase,
} from "react-icons/si";

const StyleAbout = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > p {
    color: skyblue;
    font-size: 3rem;
    margin: 0 auto;
  }
  width: 90%;
  margin: auto;
  height: 100vh;
  overflow: hidden;

  .emoji {
    margin-top: 40px;
    font-size: 7rem;
  }
  span {
    font-size: 1.5rem;
    padding: 3px;
    margin: 0;
  }
  span:last-child {
    margin-bottom: 10px;
  }

  a {
    color: darkgoldenrod;
  }
  @media (max-width: 720px) {
    article,
    span {
      font-size: 14px;
    }
    .emoji {
      margin-top: 100px;
    }
    span {
      width: 90%;
      margin: 0 auto;
    }
    height: auto;
  }
`;

const StyleArticle = styled.div`
  font-size: 1.2rem;
  width: 100%;
  margin: 0 auto;
  margin: 20px auto;
  /* text-align: start; */
  @media (max-width: 720px) {
    margin: 10px auto;
  }
`;

const StyleIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 720px) {
    margin-bottom: 20px;
  }
  .const {
    color: #0d6efd;
  }
`;

const About = () => {
  return (
    <StyleAbout>
      <div className="emoji">🙋‍♂️</div>
      <StyleIcons>
        <span>
          <span className="const">const</span> learnMoreAboutMe = [
          <a
            href="https://www.github.com/lbu0413"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub size={25} />
          </a>
          ,
          <a
            href="https://www.linkedin.com/in/vvooklee/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin size={25} />
          </a>
          ]
        </span>
        <span>
          <span className="const">const</span> techStacks = [
          <SiHtml5 size={25} />,
          <SiCss3 size={25} />,
          <SiBootstrap size={25} />,
          <SiJavascript size={25} />,
          <SiTypescript size={25} />,<SiPython size={25} />,
          <SiNodeDotJs size={25} />,<SiMongodb size={25} />,
          <SiReact size={25} />,
          <SiRedux size={25} />,<SiVueDotJs size={25} />,<SiWebpack size={25} />
          ,
          <SiEslint size={25} />, <SiFirebase size={25} />]
        </span>
      </StyleIcons>
      <StyleArticle>
        <article>Hey there, my name is Wook</article>
        <article>
          I am a Software Engineer with a passion for coding and tackling
          real-world challenges.
        </article>
        <article>
          My journey into development stems from a non-traditional background in
          music production.
        </article>
        <article>
          I see parallels between music producers and software developers - both
          craft something valuable from nothing.
        </article>
        <article>Being a user-oriented developer is my forte!</article>
        <article>
          My commitment to improvement shines through GitHub commits, personal
          projects, and solving leetcode problems to enhance my algorithmic and
          data structures skills.
        </article>
        <article>
          I also have an internship experience as a Software Engineer! I've
          delved into few collaborative projects alongside other developers as
          well :)
        </article>
        <br></br>
        <article>Thank you</article>
      </StyleArticle>
    </StyleAbout>
  );
};

export default About;
