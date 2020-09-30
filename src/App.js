import React from "react";
import Navbar from "./componenets/Navbar";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Search from "./componenets/Search";
import PokemonContainer from "./componenets/PokemonContainer";

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Navbar />
				<Switch>
					<Redirect from='/:url*(/+)' to={pathname.slice(0, -1)} />
					<Route exact path='/react-pokedex' component={Search} />
					<Route
						path='/react-pokedex/:pokemon_name'
						component={PokemonContainer}
					/>
					<Route component={Search} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;
