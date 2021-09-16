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
import { EmojiProvider, Emoji } from "react-apple-emojis";
import emojiData from "react-apple-emojis/lib/data.json";

const StyleAbout = styled.div`
	margin: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	& > p {
		color: skyblue;
		font-size: 2rem;
	}
	width: 90%;
	margin: auto;
	height: 100vh;
	overflow: hidden;

	.emoji {
		margin-top: 100px;
	}
	span {
		font-size: 1rem;
		padding: 3px;
		margin: 0;
	}
	span:last-child {
		margin-bottom: 10px;
	}

	article {
		font-size: 1rem;
	}
	a {
		color: darkgoldenrod;
	}
	@media (max-width: 720px) {
		article {
			font-size: 14px;
		}
		height: auto;
	}
`;

const About = () => {
	return (
		<StyleAbout>
			<EmojiProvider data={emojiData}>
				<Emoji className="emoji" name="man-raising-hand-light-skin-tone" />
			</EmojiProvider>
			<p>console.log("</p>
			<article>Hello, my name is Wook</article>
			<article>
				I am a Front End Developer who loves to code and solve real-world
				problems.
			</article>
			<article>
				I came from a non-traditional background: music production. I believe
				music producers and software developers are similar in a way that they
				both create something valuable for users from nothing.
			</article>
			<article>With that said, I'm a user-oriented developer :)</article>
			<article>
				Even after graduating from school, I pushed commits on Github every day,
				made multiple personal projects, and solved a lot of coding challenges
				to sharpen my algorithms and data structures skills.
			</article>
			<article>
				Also, I have experience building a web application for a non-profit
				organization with 4 other developers and 4 data scientists.
			</article>
			<article>
				From that experience, I learned how to contribute to a project as a
				front-end or back-end developer.
			</article>
			<article>Thank you</article>
			<p>{'")'}</p>
			<span>
				const learnMoreAboutMe = [
				<a
					href="https://www.github.com/lbu0413"
					target="_blank"
					rel="noreferrer">
					<AiFillGithub size={25} />
				</a>
				,
				<a
					href="https://www.linkedin.com/in/vvooklee/"
					target="_blank"
					rel="noreferrer">
					<AiFillLinkedin size={25} />
				</a>
				]
			</span>
			<span>
				const techStacks = [<SiHtml5 size={25} />,<SiCss3 size={25} />,
				<SiBootstrap size={25} />,
				<SiJavascript size={25} />,
				<SiTypescript size={25} />,<SiPython size={25} />,
				<SiNodeDotJs size={25} />,<SiMongodb size={25} />,
				<SiReact size={25} />,
				<SiRedux size={25} />,<SiVueDotJs size={25} />,<SiWebpack size={25} />,
				<SiEslint size={25} />, <SiFirebase size={25} />]
			</span>
		</StyleAbout>
	);
};

export default About;
