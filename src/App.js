import { useState, useEffect } from 'react';
import './App.css';
import Cardlist from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () =>
{
  const [searchField, setSearchField] = useState(''); //[value,setvalue] //'' intializes searchField fcooL!
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    console.log('effect fires');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField])


  const onSearchChange = (event) => 
    {
      const searchFieldValue = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldValue);
    }

  const filterMonsters = monsters.filter((monster) => {
  return monster.name.toLocaleLowerCase().includes(searchField);
  })

  return(    <div className="App">
  <h1 className='app-title'>Monsters Rolodex!</h1>
   <SearchBox 
    className = 'monsters-search-box'
    onChangeHandler = {onSearchChange}
    placeholder = 'search monsters'/>
  
  {<Cardlist monsters = {filterMonsters}/> }
</div>
);
}
// class App extends Component {
// constructor()
// {
//   super();

//   this.state = 
//   {
//     monsters: [],
//     searchField: ''
//   };
// }

//   onSearchChange = (event) => 
//   {
//     const searchFieldValue = event.target.value.toLocaleLowerCase();
//     this.setState(() => {return {searchField: searchFieldValue};})
//   }

//   componentDidMount()
//   {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => this.setState(() =>
//     {
//       return {monsters: users}
//     },
//       () =>
//       {console.log(this.state);}
//       ))
//   }

//   render()
//   {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     })

//     return(
//     <div className="App">
//       <h1 className='app-title'>Monsters Rolodex!</h1>
//       <SearchBox 
//         className = 'monsters-search-box'
//         onChangeHandler = {onSearchChange}
//         placeholder = 'search monsters'/>
      
//       <Cardlist monsters = {filteredMonsters}/>
//     </div>
//     );
//   }
// }

export default App;
