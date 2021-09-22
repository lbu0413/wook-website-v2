import React from "react";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const StyledLoader = styled.div`
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	& > span {
		font-size: 140px;
	}
	.loader {
		font-size: 160px;
	}
`;

const Loader = () => {
	return (
		<StyledLoader>
			<span>W</span>
			<Spinner className="loader" size="lg" animation="border" variant="info" />
			<Spinner
				className="loader"
				size="lg"
				animation="border"
				variant="primary"
			/>
			<span>K</span>
		</StyledLoader>
	);
};

export default Loader;
