import React from "react";
import "./Inputfield.css";

const inputfield = (props) => {
  var inputtext;
  return (
    <div className="inputfield">
      <input
        onChange={(event) => {
          event.stopPropagation();
          inputtext = event.target.value;
        }}
        placeholder="please enter the value"
      ></input>
      <button
        onClick={(event) => {
          event.stopPropagation();
          props.change_element(props.name, inputtext);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default inputfield;
