import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchKey: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) =>
        this.setState(() => {
          return { monster: users };
        })
      );
  }

  onSearchChange = (ev) => {
    this.setState(() => {
      return { searchKey: ev.target.value.toLocaleLowerCase() };
    });
  };

  render() {
    const { monster, searchKey } = this.state;
    const onSearchChange = this.onSearchChange;

    const lstFilter = monster.filter((x) => {
      return x.name.toLocaleLowerCase().includes(searchKey);
    });

    return (
      <div className="App">
        <header className="App-header">
          <SearchBox onChangeHandler={onSearchChange} className='search-monster' placeHolder='Search Keyword' />
          <CardList monster={lstFilter}  />
        </header>
      </div>
    );
  }
}

export default App;
