import React from "react";
import { connect } from "react-redux";
import { PlannerWrapper } from './styles'

import Appbar from "../../components/Appbar";
import CreateTask from "../../components/CreateTask";
import Tasks from "../../components/Tasks";

const Planner = () => {

  return (
    <>
      <Appbar/>

      <PlannerWrapper>

      <CreateTask/>

      <Tasks/>

    </PlannerWrapper>
    </>
  );
}

export default connect()(Planner);
