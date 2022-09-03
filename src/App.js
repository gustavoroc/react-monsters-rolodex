import React from 'react';

import './App.css';
import CardList from './components/card-list/card-list.component';

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

  onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase()
    this.setState(() => { return { searchField : searchString } } )
  };

  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    })

    return <div className='App'>
        <input 
              className='search-box'
              type='search' 
              placeholder='search monsters' 
              onChange={onSearchChange}
          />
         <CardList monsters={filteredMonsters}/>
    </div>  
  }
}

export default App;
