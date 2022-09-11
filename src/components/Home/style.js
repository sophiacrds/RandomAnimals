import styled from "styled-components";

export const Main = styled.main`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;

	@media (max-width: 870px) {
		flex-direction: column;
		gap: 1rem;
	}
`;

export const Content = styled.div`
	width: ${(p) => (p.card ? "15%" : "50%")};
	height: unset;
	padding: 0.6rem 0 0 0;
	display: flex;
	justify-content: center;
	align-items: ${(p) => (p.card ? "flex-end" : "center")};
	flex-direction: column;
	gap: 10px;

	@media (max-width: 870px) {
		width: 85%;
		flex-direction: ${(p) => (p.card ? "row" : "column")};
		align-items: center;
	}
	@media (max-width: 780px) {
		width: 90%;
	}
`;

export const Title = styled.h1`
	text-align: ${(p) => (p.card ? "right" : "center")};
	@media (max-width: 870px) {
		text-align: center;
	}
	@media (max-width: 780px) {
		font-size: 1.3rem;
	}
`;

export const Btn = styled.button`
	background: none;
	font-weight: bold;
	border: 1.8px solid black;
	border-radius: 20px;
	padding: 0.6rem;
	width: 9rem;
	box-shadow: 2px 2px 4px 0 gray;
	cursor: pointer;
`;
