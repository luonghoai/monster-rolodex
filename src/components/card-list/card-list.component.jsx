import Card from "../card/card.component";
import "./card-list.styles.css";

// class CardList extends Component {
//   render() {
//     const { monster } = this.props;
//     return (
//       <div className="card-list">
//         {monster.map((mons) => {
//           const { id, name, email } = mons;
//           return <Card id={id} name={name} email={email} key={id}/>;
//         })}
//       </div>
//     );
//   }
// }

const CardList = (props) => {
  const { monster } = props;
  return (
    <div className="card-list">
      {monster.map((mons) => {
        const { id, name, email } = mons;
        return <Card id={id} name={name} email={email} key={id}/>;
      })}
    </div>
  );
}

export default CardList;
