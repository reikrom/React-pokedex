import React from "react";
import Navbar from "./componenets/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Search from "./componenets/Search";
import PokemonContainer from "./componenets/PokemonContainer";

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Navbar />
				<Switch>
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
