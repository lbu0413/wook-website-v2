import React from "react";
import styled from "styled-components";
import { FcOpenedFolder } from "react-icons/fc";

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

const Contact = () => {
	return (
		<StyleContact>
			<FcOpenedFolder size={85} />
			<p>VVOOKLY@GMAIL.COM</p>
			<p>404-642-6878</p>
			<p>Atlanta, GA</p>
		</StyleContact>
	);
};

export default Contact;
