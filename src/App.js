import React from 'react';

import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((users) => this.setState(
          () => {
            return { monsters: users }
          }
        ));
  }

  render() {

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField)
    })

    return <div className='App'>
      <input className='search-box' type='search' placeholder='search monsters' onChange={(event) => {
          const searchString = event.target.value.toLowerCase()
          this.setState(() => { return { searchField : searchString } } )
        }}/>
      {filteredMonsters.map((monster, i) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
            );
         })}
    </div>  
  }
}

export default App;
