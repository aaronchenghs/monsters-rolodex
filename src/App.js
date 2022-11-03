import { Component } from 'react';
import './App.css';
import Cardlist from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
class App extends Component {
constructor()
{
  super();

  this.state = 
  {
    monsters: [],
    searchField: ''
  };
}

  onSearchChange = (event) => 
  {
    const searchFieldValue = event.target.value.toLocaleLowerCase();
    this.setState(() => {return {searchField: searchFieldValue};})
  }

  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(() =>
    {
      return {monsters: users}
    },
      () =>
      {console.log(this.state);}
      ))
  }

  render()
  {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })

    return(
    <div className="App">
      <SearchBox 
        className = 'search-box'
        onChangeHandler = {onSearchChange}
        placeholder = 'search monsters'/>
      
      <Cardlist monsters = {filteredMonsters}/>
    </div>
    );
  }
}

export default App;
