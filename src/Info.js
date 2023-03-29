import { PropTypes } from "prop-types";
import React from "react";

class Info extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const title = this.props.title;
    const showtitle = true;

    if (showtitle) {
      return (
        <div>
          <h1>{showtitle ? title : ""}</h1>
          <h1>User Name</h1>
          <p>Lakshman_Kommula</p>
        </div>
      );
    } else {
      return <p>empty</p>;
    }
  }
}

Info.defaultProps = {
  title: "Default",
  number: 23232,
};

Info.propTypes = {
  title: PropTypes.string,
};

export default Info;
