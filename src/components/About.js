import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import { Card, Button } from "react-bootstrap";
import self from "../img/self.jpeg";
import styled from "styled-components";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const StyleAbout = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;

	.self {
		width: 120px;
		height: 120px;
		margin: 20px;
	}
	span {
		color: blue;
	}
`;

const About = () => {
	return (
		<StyleAbout>
			<Image src={self} roundedCircle className="self" />
			<Card style={{ width: "50rem" }}>
				<Card.Body>
					<Card.Text>Hi, my name is Wook.</Card.Text>
					<Card.Text>
						I am a Front End Developer who loves to code and never stops
						learning. My background before developer is music production and I
						believe they are similar in a way that both music producers and
						software developers create something valuable for users from
						nothing! I am a user-oriented developer. Even after graduating from
						school, I pushed commits on Github everyday, made multiple personal
						projects, and solved a lot of coding challenges to enhance my
						algorithms and data structures skills. Currently learning Typescript
						to pick up Object Oriented Programming and Typing.
					</Card.Text>
					<span>const</span> moreAboutMe = [
					<Card.Link
						target="_blank"
						rel="noreferrer"
						href="http://www.github.com/lbu0413">
						<AiFillGithub size={40} color="black" />
					</Card.Link>
					,
					<Card.Link
						target="_blank"
						rel="noreferrer"
						href="https://www.linkedin.com/in/vvooklee/">
						<AiFillLinkedin size={40} color="#0077b5" />
					</Card.Link>
					]
				</Card.Body>
			</Card>
		</StyleAbout>
	);
};

export default About;
