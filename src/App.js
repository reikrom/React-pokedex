import React, { useState } from "react";
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
					<Route exact path='/' component={Search} />
					<Route path='/:pokemon_name' component={PokemonContainer} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;
