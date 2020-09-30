import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className='nav-wrapper red darken-3'>
			<div className='container'>
				<NavLink to='/react-pokedex' className='left brand-logo'>
					React-Dex
				</NavLink>
				<ul className='right'>
					<li>
						<NavLink to='/react-pokedex'>Search</NavLink>
					</li>
					<li>
						<NavLink to={`/react-pokedex/${Math.ceil(Math.random() * 801)}`}>
							Random
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default withRouter(Navbar);
