import React, { Component } from 'react';
import MovieImg from '../assets/Image/movie_black2.jpg';
import { Link } from "react-router-dom";


class Header extends Component {


	render() {
		return (
			<div className="Header">
				<nav className="navbar navbar-expand-lg">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="navbar-brand" to="/">Movies</Link>
						</li>
						<li className="nav-item">
							<Link className="navbar-brand" to="/Admin">Admin</Link>
						</li>
						<li className="nav-item">
							<Link className="navbar-brand" to="/About">About</Link>
						</li>
						<li className="nav-item">
							<Link className="navbar-brand" to="/Login">Login</Link>
						</li>
					</ul>
				</nav>
				<div className="jumbotron">
					<h1>React-Redux-Router Movies  <img alt="Movie" className="rounded" src={MovieImg} style={{ width: 100, height: 100 }}></img></h1>
					This small React-App demonstrates the use of React-Router
				</div>
			</div>
		);
	}
}

export default Header;