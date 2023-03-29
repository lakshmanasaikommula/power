import { PropTypes } from "prop-types";
import "./App.css";
import Info from "./Info.js";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Info />
      <ButtonState></ButtonState>
    </div>
  );
}

//Functional Components
function ButtonState() {
  const [title, setTitle] = useState("hello");
  const [count, setCount] = useState(1);

  const updateTitle = () => {
    setTitle("title Changed");
  };

  const updateCounter = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <Data title={title} count={count} />
      <button onClick={updateTitle}>Update Title</button>
      <button onClick={updateCounter}>Update Counter</button>
    </div>
  );
}

function Data(props) {
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Count: {props.count}</p>
    </div>
  );
}
export default App;
