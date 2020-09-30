import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className='nav-wrapper red darken-3'>
			<div className='container'>
				<a href='/react-pokedex' className='left brand-logo'>
					React-Dex
				</a>
				<ul className='right'>
					<li>
						<NavLink to='/react-pokedex'>Search</NavLink>
					</li>
					<li>
						<a href={`/react-pokedex/${Math.ceil(Math.random() * 801)}`}>
							Random
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default withRouter(Navbar);
