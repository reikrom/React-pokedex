import React from "react";
import Navbar from "./componenets/Navbar";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import Search from "./componenets/Search";
import PokemonContainer from "./componenets/PokemonContainer";

const App = () => {
	const { pathname } = useLocation();

	return (
		<div>
			<Navbar />
			<Switch>
				<Redirect from='/:url*(/+)' to={pathname.slice(0, -1)} />
				<Route exact path='/react-pokedex' component={Search} />
				<Route
					path='/react-pokedex/:pokemon_name/'
					component={PokemonContainer}
				/>
				<Route component={Search} />
			</Switch>
		</div>
	);
};

export default App;
