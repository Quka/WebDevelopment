import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

const Counter = ({ count, increment, decrement }) => {
    console.log(count)
    return (
        <div>
            <button
                onClick={increment}
                className="ui button primary">
                Increment
            </button>
            <button
                onClick={decrement}
                className="ui button primary">
                Decrement
            </button>
            Current count: <span>{ count }</span>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { count: state.count };
}

const mapDispatchToProps = { increment, decrement }

//Dette er standard metoden til at hente data fra vores redux store til komponenten

export default connect(mapStateToProps, mapDispatchToProps)(Counter);