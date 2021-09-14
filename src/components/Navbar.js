import React from "react";
import { Nav } from "react-bootstrap";
import styled from "styled-components";
import wookIcon from "../img/wook-icon.png";

const StyledNav = styled.nav`
	background-color: whitesmoke;

	.wookIcon {
		width: 100px;
	}
`;

const NavBar = () => {
	return (
		<StyledNav>
			<Nav
				variant="tab"
				defaultActiveKey="/home"
				className="align-items-center">
				<Nav.Item>
					<Nav.Link href="/">
						<img src={wookIcon} alt="wook-icon" className="wookIcon" />
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="/projects">projects</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="/about">about</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="/contact">contact</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="/resume">resume</Nav.Link>
				</Nav.Item>
			</Nav>
		</StyledNav>
	);
};

export default NavBar;
