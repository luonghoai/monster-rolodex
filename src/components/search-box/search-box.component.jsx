import './search-box.styles.css';

// class SearchBox extends Component {
//   render() {
//     return (
//       <input
//         className='search-box'
//         type="search"
//         placeholder={this.props.placeHolder}
//         onChange={this.props.onChangeHandler}
//       />
//     );
//   }
// }

const SearchBox = (props) => {
  const {placeHolder, onChangeHandler} = props;
  return (
    <input
      className='search-box'
      type="search"
      placeholder={placeHolder}
      onChange={onChangeHandler}
    />
  );
}

export default SearchBox;
