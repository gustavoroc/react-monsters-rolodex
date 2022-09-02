import React from 'react';

import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      "name":{ "firstName": "Gustavo", "lastName": "Rocha" },
      "company":"ZTM"
    };
  }
  componentDidMount() {
    console.log("Montei!")
  }
  componentDidUpdate() {
    console.log("Fui atualizado!")
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> Hi, i'm {this.state.name.firstName } {this.state.name.lastName}, I work at {this.state.company} </p>
          <button onClick={() => {
            this.setState(
            () => {
              // Works in an asynchronous way;
              return {
                  name: { firstName: 'Andrei', lastName: 'Neaogie' }
                };
              }, 
            () => {
              // Only is called when the state is updated;
                console.log(this.state);
              }
            );
          }}> Change Name </button>
        </header>
      </div>
    );
  }
}

export default App;
