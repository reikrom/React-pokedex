import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonView from "./PokemonView";

const PokemonContainer = props => {
	const [isLoading, setIsLoading] = useState(true);
	const [pokemon, setPokemon] = useState(null);

	useEffect(() => {
		const id = props.match.params.pokemon_name;
		axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => {
			setPokemon(res.data);
			setIsLoading(false);
		});
		// eslint-disable-next-line
	}, []);

	const colors = {
		bug: "green white-text",
		dark: "blue-grey darken-4 white-text",
		dragon: "cyan lighten-3",
		electric: "yellow",
		fairy: "pink accent-2",
		fighting: "orange darken-2",
		fire: "red",
		flying: "blue-grey lighten-3",
		ghost: "indigo lighten-3",
		grass: "light-green accent-2",
		ground: "brown white-text",
		ice: "cyan lighten-5",
		normal: "deep-purple lighten-5",
		poison: "deep-purple lighten-2 white-text",
		psychic: "purple accent-2",
		rock: "brown darken-2 white-text",
		steel: "teal lighten-3",
		water: "light-blue white-text",
	};

	const heightConverter = height => {
		if (height < 10) {
			return `0.${height}m`;
		} else {
			let a;
			let b;
			let str = height.toString();
			a = str.toString().slice(0, 1);
			b = str.toString().slice(1, str.length);
			return `${a}.${b}m`;
		}
	};
	const weightConverter = weight => {
		if (weight < 10) {
			return `0.${weight}kg`;
		} else {
			let a;
			let b;
			let str = weight.toString();
			a = str.slice(0, str.length - 1);
			b = str.substring(str.length - 1, str.length);
			if (b.includes("0")) {
				return `${a}kg`;
			} else {
				return `${a}.${b}kg`;
			}
		}
	};

	return isLoading ? (
		<div>Loading</div>
	) : (
		<>
			<PokemonView
				height={heightConverter(pokemon.height)}
				weight={weightConverter(pokemon.weight)}
				colors={colors}
				name={pokemon.name}
				id={pokemon.id}
				type={pokemon.types}
			/>
		</>
	);
};

export default PokemonContainer;
