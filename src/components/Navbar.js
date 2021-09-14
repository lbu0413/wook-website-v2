import React from "react";
import { Nav } from "react-bootstrap";
import styled from "styled-components";
import wookIcon from "../img/wook-icon.png";

const StyledNav = styled.nav`
	display: flex;
	justify-content: center;
	top: 0;
	left: 0;
	position: fixed;
	.wookIcon {
		width: 100px;
	}
`;

const NavBar = () => {
	return (
		<StyledNav>
			<Nav fill variant="tabs" defaultActiveKey="/home">
				<Nav.Item>
					<Nav.Link href="/">
						<img src={wookIcon} alt="wook-icon" className="wookIcon" />
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="/Projects">Projects</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="/About">About</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="/Resume">Resume</Nav.Link>
				</Nav.Item>
			</Nav>
		</StyledNav>
	);
};

export default NavBar;
