import React from "react";
import styled from "styled-components";

const CardBox = styled.div`
	width: min-content !important;
	max-width: 90%;
	max-height: 80vmax !important;
	background: #b1b0aa;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 10px;
	padding: 15px;
	box-shadow: 4px 4px 2px 0px #000000;
`;

const Img = styled.img`
	max-width: 60vmax;
	max-height: 75vmin !important;
	object-fit: contain;
	overflow: hidden;

	@media (max-width: 870px) {
		max-width: 80vmin;
		max-height: 70vmax !important;
	}
	@media (max-width: 780px) {
		max-width: 80vmin;
		max-height: 65vmax !important;
	}
	@media (max-width: 425px) {
		max-height: 55vmax !important;
	}
`;

const Label = styled.div`
	width: 100%;
	@media (max-width: 780px) {
		max-width: 80vmin;
	}
`;

export default function Card(p) {
	return (
		<CardBox id="card">
			<Img src={p.img} alt="" />
			<Label>
				<h2>{p.name}</h2>
				<p>from {p.local}</p>
			</Label>
		</CardBox>
	);
}
