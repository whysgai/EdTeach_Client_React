import React from "react";
import {connect} from "react-redux";

const stateToPropertyMapper = (state) => ({
  widgets: state.moduleReducer.modules
})

export default connect(
    stateToPropertyMapper
)