import React, { Component } from 'react';
import routes from './route/routes';
class App extends Component {
  render() {
    return (
      <div className="App">
        {routes}
      </div>
    );
  }
}

export default App;
