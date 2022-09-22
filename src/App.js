import { useEffect, useState } from "react";

import "./App.css";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monster: [],
//       searchKey: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         return response.json();
//       })
//       .then((users) =>
//         this.setState(() => {
//           return { monster: users };
//         })
//       );
//   }

// onSearchChange = (ev) => {
//   this.setState(() => {
//     return { searchKey: ev.target.value.toLocaleLowerCase() };
//   });
// };

//   render() {
//     const { monster, searchKey } = this.state;
//     const onSearchChange = this.onSearchChange;

//     const lstFilter = monster.filter((x) => {
//       return x.name.toLocaleLowerCase().includes(searchKey);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monster Rolodex</h1>
//         <header className="App-header">
//           <SearchBox
//             onChangeHandler={onSearchChange}
//             className="search-monster"
//             placeHolder="Search Keyword"
//           />
//           <CardList monster={lstFilter} />
//         </header>
//       </div>
//     );
//   }
// }

const App = () => {
  const [searchKey, setSearchKey] = useState("");
  const [monster, setMonster] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonster(users));
  }, []);

  const onSearchChange = (ev) => {
    setSearchKey(ev.target.value.toLocaleLowerCase());
  };

  const lstFilter = monster.filter((mons) =>
    mons.name.toLocaleLowerCase().includes(searchKey)
  );

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <header className="App-header">
        <SearchBox
          onChangeHandler={onSearchChange}
          className="search-monster"
          placeHolder="Search Keyword"
        />
        <CardList monster={lstFilter} />
      </header>
    </div>
  );
};

export default App;
