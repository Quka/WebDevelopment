import React from 'react'
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import { Switch, Route } from "react-router-dom";

const Movies = () => {
    return (
        <Switch>
            <Route exact path="/" component={MovieList} />
        </Switch>
    )
}

export default Movies