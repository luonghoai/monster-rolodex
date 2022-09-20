import { Component } from "react";

class CardList extends Component {
  render() {
    const { monster } = this.props;
    return (
      <div>
        {monster.map((mons) => {
          return (
            <div key={mons.id}>
              <h1>{mons.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
