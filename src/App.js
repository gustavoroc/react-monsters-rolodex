import React from 'react';

import './App.css';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

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
    // Changes the searchField on the state to the value of the input.
    const searchString = event.target.value.toLowerCase()
    this.setState(() => { return { searchField : searchString } } )
  };

  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      // Filter the monsters based on the searchField.
      return monster.name.toLowerCase().includes(searchField)
    })

    return <div className='App'>
          <h1 className='app-title'>Monsters Rolodex</h1>
         <SearchBox 
            onChangeHandler={onSearchChange} 
            placeholder='search monsters'
            className='monsters-search-box'
          />
         <CardList monsters={filteredMonsters}/>
    </div>  
  }
}

export default App;
