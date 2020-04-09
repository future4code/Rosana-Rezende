import React from "react";
import { connect } from "react-redux";
import { PlannerWrapper } from './styles'

import Appbar from "../../components/Appbar";
import CreateTask from "../../components/CreateTask";
import Tasks from "../../components/Tasks";

export const Planner = () => {

  return (
    <>
      <Appbar id="appbar"/>

      <PlannerWrapper>

        <CreateTask id="createtask"/>

        <Tasks id="tasks"/>

      </PlannerWrapper>
    </>
  );
}

export default connect()(Planner);
