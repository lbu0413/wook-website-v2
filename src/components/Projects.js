import React from "react";
import styled from "styled-components";
import { projectsData } from "../data/projectsData";
import { FcOpenedFolder } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

const StyleContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: 80px;
	margin-bottom: 20px;
`;

const StyleFolder = styled.div``;

const StyledH4 = styled.h4`
	color: gray;
	margin: 3px;
	font-size: 14px;
`;

const StyledProjects = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	flex-wrap: wrap;
	margin: 10px;
	width: 100%;

	img {
		width: 200px;
		height: 200px;
		border-radius: 10px;
		/* box-shadow: 0 4px 6px rgba(50, 50, 93, 0.4), 0 10px 10px rgba(0, 0, 0, 0.4); */
		box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
			rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
			rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
	}
`;
const StyleEachProject = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 30%;
	height: 100%;
	margin: 20px;
	& > h2 {
		font-size: 1.2rem;
	}
	@media (max-width: 720px) {
		width: 50%;
		font-size: 1rem;
	}
`;

const Projects = () => {
	return (
		<StyleContainer>
			<StyleFolder>
				<FcOpenedFolder size={80} />
			</StyleFolder>
			<StyledH4>click on each image to experience the project</StyledH4>
			<StyledProjects>
				{projectsData.map((project) => (
					<StyleEachProject className="eachPro">
						<h2 className="title">
							{project.id}. {project.title}
							<a
								style={{
									outline: "none",
									textDecoration: "none",
									color: "black",
								}}
								href={project.hubLink}
								target="_blank"
								rel="noreferrer">
								<AiFillGithub size={25} />
							</a>
						</h2>
						<div className="icons">{project.icons}</div>

						<div className="pro-main">
							<a href={project.link} target="_blank" rel="noreferrer">
								<img src={project.img} alt={project.title} />
							</a>
							{project.icons}
						</div>
					</StyleEachProject>
				))}
			</StyledProjects>
		</StyleContainer>
	);
};

export default Projects;
