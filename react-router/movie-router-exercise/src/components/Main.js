import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Movies from "./Movies";
import MovieDetail from './MovieDetail';

class Main extends Component {

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-4">
						<Switch>
							<Route exact path='/' component={Movies} />
							{/* <Route path='/About' component={About} /> */}
							{/* <Route path='/Login' component={UnderConstruction} /> */}
							{/* <Route path='/Admin' component={UnderConstruction} /> */}
							<Route path='/MovieDetails' component={MovieDetail} />
							{/* <Route path='/MovieDetails' component={MovieDetail} /> */}
						</Switch>
					</div>
				</div>
			</div>
		);
	}
}

export default Main;

