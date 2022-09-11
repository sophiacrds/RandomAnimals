import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card";
import * as S from "./style";

export default function Home() {
	const [animal, setAnimal] = useState();
	const [card, setCard] = useState(false);

	useEffect(() => {}, []);

	const changeColor = () => {
		// const randomColor = "#" + (((1 << 24) * Math.random()) | 0).toString(16) + "70";

		const red = Math.floor(((0.8 + Math.random()) * 256) / 4);
		const green = Math.floor(((1 + Math.random()) * 256) / 4);
		const blue = Math.floor(((1 + Math.random()) * 256) / 4);
		const randomColor = `rgb(${red} ${green} ${blue} / 50%)`;
		// dark colors ("/4" to generate low values : low clarity) with 0.5 opacity

		const card = document.querySelector("#card");
		card.style.background = randomColor;
	};

	const getAnimal = () => {
		axios.get("https://zoo-animal-api.herokuapp.com/animals/rand/").then((response) => {
			setAnimal({
				name: response.data.name,
				local: response.data.geo_range,
				img: response.data.image_link,
			});
			setCard(true);
			changeColor();
		});
	};

	return (
		<S.Main>
			<S.Content card={card}>
				<S.Title card={card}>want to discover a random animal?</S.Title>
				<S.Btn
					onClick={() => {
						getAnimal();
					}}
				>
					click here
				</S.Btn>
			</S.Content>
			{card && <Card name={animal.name} img={animal.img} local={animal.local} />}
		</S.Main>
	);
}
