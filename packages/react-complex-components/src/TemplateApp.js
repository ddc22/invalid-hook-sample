import React from "react";
import { connect } from "react-redux";

import { MenuButton, KeyBoardButton } from "react-simple-component-lib";

function TemplateApp(props) {
  return (
    <div className="TemplateApp">
      <h1>{props.testGivenToTemlateApp}</h1>
      <MenuButton />
      <KeyBoardButton />
    </div>
  );
}

const mapStateToProps = (state, ownProps = {}) => {
  return { testGivenToTemlateApp: state.test };
};

const mapDispatchToProps = (dispatch, ownProps) => {};

export default connect(mapStateToProps, mapDispatchToProps)(TemplateApp);
