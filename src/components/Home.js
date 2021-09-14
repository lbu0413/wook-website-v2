import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "./Loader";
import styled from "styled-components";
import { withRouter } from "react-router";
import { NavLink, useHistory } from "react-router-dom";
import { FcFolder, FcOpenedFolder } from "react-icons/fc";
import DelayLink from "react-delay-link";

const StyledHome = styled.main`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: white;
	height: 100vh;
	width: 100%;
	overflow-y: hidden;

	.welcome {
		font-size: 10rem;
		margin: 0;
	}
	.welcome-text {
		font-size: 3rem;
	}
`;

const StyledIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	cursor: pointer;
`;

const StyledIconsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Home = () => {
	const initialFolders = [
		{
			id: 1,
			title: "about",
			open: false,
		},
		{
			id: 2,
			title: "projects",
			open: false,
		},
		{
			id: 3,
			title: "contact",
			open: false,
		},
		{
			id: 4,
			title: "resume",
			open: false,
		},
	];

	const [loading, setLoading] = useState(true);
	const [folders, setFolders] = useState(initialFolders);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 300);
	}, []);

	const handleFolders = (id) => {
		let updatedFolders = folders.map((folder) => {
			if (folder.id === id) {
				return { ...folder, open: !folder.open };
			}
			return folder;
		});
		setFolders(updatedFolders);
	};
	return (
		<StyledHome>
			{loading ? (
				<Loader />
			) : (
				<>
					<p className="welcome-text">Hello, My name is Wook</p>
					<p className="welcome">🙋🏻‍♂️</p>
					<StyledIconsContainer>
						{folders.map((folder) => {
							return (
								<StyledIcons key={folder.id}>
									<DelayLink
										delay={500}
										clickAction={() => handleFolders(folder.id)}
										to={"/" + folder.title}>
										{folder.open === false ? (
											<FcFolder size={85} />
										) : (
											<FcOpenedFolder size={85} />
										)}
									</DelayLink>
									{folder.title}
								</StyledIcons>
							);
						})}
					</StyledIconsContainer>
				</>
			)}
		</StyledHome>
	);
};

export default withRouter(Home);
