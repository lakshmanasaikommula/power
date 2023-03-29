import { PropTypes } from "prop-types";
import "./App.css";
import Info from "./Info.js";

/*adding value to the props*/
function App() {
  return (
    <div className="App">
      <Info title="My App" />
      <Additem text="Sai" number="Hello" sai="kommula" />
      <Additem text="Sai" number={2} sai="kommula" />
    </div>
  );
}

/*creating a props and using below*/
function Additem(props) {
  return (
    <form>
      <label for="text-form">write something......</label>
      <input type="text" value={props.text} id="text-form" />
      <p>{props.number}</p>
    </form>
  );
}

Additem.defaultProps = {
  number: 22,
  text: "Defualt",
};

Additem.defaultProps = {
  number: PropTypes.number,
  text: PropTypes.string,
};

export default App;
