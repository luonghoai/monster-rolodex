import { Component } from "react";
import "./card-list.styles.css";
import "./card.styles.css";

class CardList extends Component {
  render() {
    const { monster } = this.props;
    return (
      <div className="card-list">
        {monster.map((mons) => {
          const { id, name, email } = mons;
          return (
            <div className="card-container" key={id}>
              <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set1&size=180x180`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
