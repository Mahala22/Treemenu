import React from "react";
import Inputfield from "../Inputfield/Inputfield";
import "./Contextmenu.css";

const contextmenu = (props) => {
  return (
    <ul className="smallmenu">
      <li
        onClick={(event) => {
          event.stopPropagation();
          props.showAddhandler(props.name, !props.showAdd);
        }}
      >
        {" "}
        Add{" "}
      </li>
      {props.showAdd ? (
        <li>
          <Inputfield name={props.name} change_element={props.addelement} />
        </li>
      ) : null}
      <li
        onClick={(event) => {
          event.stopPropagation();
          props.showEdithandler(props.name, !props.showEdit);
        }}
      >
        {" "}
        Edit{" "}
      </li>
      {props.showEdit ? (
        <li>
          <Inputfield name={props.name} change_element={props.editelement} />
        </li>
      ) : null}
      <li
        onClick={(event) => {
          event.stopPropagation();
          props.delelement(props.name);
        }}
      >
        Delete
      </li>
    </ul>
  );
};

export default contextmenu;
