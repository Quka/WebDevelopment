import React, { Component } from 'react';

import PostList from './PostList';


class App extends Component {
  render() {
    return (
      <div className="ui container">
        <header className="App-header">
          <PostList/>
        </header>
      </div>
    );
  }
}

export default App;
