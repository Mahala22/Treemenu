import React from "react";
import ContextMenu from "../Contextmenu/Contextmenu";
import "./Sublist.css";

const sublist = (props) => {
  return props.data.map((val, index) => {
    // console.log(val.name, val.show);

    return (
      <ul
        key={index}
        onClick={(event) => {
          event.stopPropagation();
          props.showmenu(val.name, !val.show);
        }}
        onContextMenu={(event) => {
          event.stopPropagation();
          event.preventDefault();
          props.showcontextmenu(val.name, !val.showContext);
        }}
      >
        <p>{val.name + "(" + val.data.length + ")"}</p>
        {val.showContext ? (
          <li>
            <ContextMenu
              showAdd={val.showaddinput}
              showEdit={val.shopeditinput}
              showAddhandler={props.showAddhandler}
              showEdithandler={props.showEdithandler}
              addelement={props.addelement}
              editelement={props.editelement}
              delelement={props.delelement}
              name={val.name}
            />
          </li>
        ) : null}
        {val.show ? (
          <li>
            {sublist({
              ...val,
              showmenu: props.showmenu,
              showcontextmenu: props.showcontextmenu,
              showAddhandler: props.showAddhandler,
              showEdithandler: props.showEdithandler,
              addelement: props.addelement,
              editelement: props.editelement,
              delelement: props.delelement,
            })}
          </li>
        ) : null}
      </ul>
    );
  });
};

export default sublist;
