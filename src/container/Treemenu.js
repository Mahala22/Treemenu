import React, { Component } from "react";
import { connect } from "react-redux";
import Sublist from "../components/Sublist/Sublist";
import "./Treemenu.css";

class Treemenu extends Component {
  render() {
    return (
      <div className="counter">
        <ul className="sidebar-menu">
          <Sublist
            data={this.props.dat}
            showcontextmenu={this.props.onShowcontextmenu}
            showmenu={this.props.onShowmenu}
            addelement={this.props.onAddelement}
            editelement={this.props.onEditelement}
            delelement={this.props.onDelelement}
            showAddhandler={this.props.onShowaddhandler}
            showEdithandler={this.props.onShowedithandler}
          />
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    dat: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onShowmenu: (arg1, arg2) =>
      dispatch({ type: "SHOWMENU", data: { arg1, arg2 } }),
    onShowcontextmenu: (arg1, arg2) =>
      dispatch({ type: "SHOWCONTEXTMENU", data: { arg1, arg2 } }),
    onAddelement: (arg1, arg2) =>
      dispatch({ type: "ADD_ELEMENT", data: { arg1, arg2 } }),
    onEditelement: (arg1, arg2) =>
      dispatch({ type: "EDIT_ELEMENT", data: { arg1, arg2 } }),
    onDelelement: (arg1) => dispatch({ type: "DEL_ELEMENT", data: { arg1 } }),
    onShowaddhandler: (arg1, arg2) =>
      dispatch({ type: "SHOW_ADD_INPUT", data: { arg1, arg2 } }),
    onShowedithandler: (arg1, arg2) =>
      dispatch({ type: "SHOW_EDIT_INPUT", data: { arg1, arg2 } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Treemenu);
