import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "./Loader";
import styled from "styled-components";
import { NavLink, Route, Link } from "react-router-dom";
import { FcFolder, FcOpenedFolder } from "react-icons/fc";

const StyledHome = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: white;
	height: 100vh;
`;

const StyledIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
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
			title: "projects",
			open: false,
		},
		{
			id: 2,
			title: "about",
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
					<StyledIconsContainer>
						{folders.map((folder) => {
							return (
								<StyledIcons key={folder.id}>
									<NavLink
										to={"/" + folder.title}
										onClick={() => handleFolders(folder.id)}>
										{folder.open === false ? (
											<FcFolder size={100} />
										) : (
											<FcOpenedFolder size={100} />
										)}
									</NavLink>
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

export default Home;
