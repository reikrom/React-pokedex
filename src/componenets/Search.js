import React, { useEffect, useState } from "react";
import axios from "axios";
import injectSheet from "react-jss";
import cn from "classnames";
import { Link } from "react-router-dom";
import "../pokemon.css";
import List from "./List";

const Search = ({ classes }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [pokemon, setPokemon] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		if (pokemon.length) {
			return;
		}
		setIsLoading(true);
		axios.get("https://pokeapi.co/api/v2/pokemon?limit=801").then(res => {
			let searchableList = res.data.results.map(mon => ({
				...mon,
				searchTerm: mon.name + mon.url.slice(33 - mon.url.length),
			}));
			setPokemon(searchableList);
			setIsLoading(false);
		});
		// eslint-disable-next-line
	}, []);

	const onChange = e => {
		setSearchTerm(e.target.value);
	};

	let searchResults = pokemon.filter(mon =>
		mon.searchTerm.includes(searchTerm)
	);

	let results;
	searchTerm.length > 0 ? (results = searchResults) : (results = pokemon);

	const pokeNr = /[0-9]{1,3}/g;

	const pokemonList = !isLoading ? (
		results.map((mon, index) => {
			let id = mon.searchTerm.match(pokeNr);
			return (
				<Link
					className='black-text'
					key={index}
					to={`react-pokedex/${mon.name}`}
				>
					<div className={cn("post card z-depth-2", classes.card)}>
						<div className={cn(classes.imageWrapper, "red lighten-5")}>
							<div className='spriteWrapper'>
								<div
									className={cn(`menu-sprite ${mon.name}`, classes.cardImage)}
								></div>
							</div>
						</div>
						<div>
							<div className={cn("card-content", classes.cardContent)}>
								<h5 className='center'>#{id}</h5>
								<div className='card-title center'>{mon.name}</div>
							</div>
						</div>
					</div>
				</Link>
			);
		})
	) : (
		<div>loading</div>
	);

	return (
		<div className='container'>
			<h4 className='center'>Search</h4>
			<input
				placeholder='Search'
				value={searchTerm}
				onChange={onChange}
				type='text'
			/>

			<div className={classes.wrapper}>
				{searchTerm.length > 0 ? pokemonList : <List list={pokemonList} />}
			</div>
		</div>
	);
};

const styles = {
	wrapper: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
	},
	card: {
		margin: "12px",
		width: "260px",
		"&:hover": {
			transform: "scale(1.02)",
		},
	},
	imageWrapper: {
		display: "flex",
		height: "200px",
		justifyContent: "center",
		alignItems: "center",
	},
	cardContent: {
		height: 188,
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
	},
	stats: {
		display: "flex",
		justifyContent: "center",
		"&> li": {
			padding: 10,
			minWidth: 79,
			textAlign: "center",
		},
	},
};

export default injectSheet(styles)(Search);
