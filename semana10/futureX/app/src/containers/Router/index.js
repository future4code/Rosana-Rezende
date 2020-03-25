import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";

import HomePage from '../HomePage'
import LoginPage from "../LoginPage";
import ListTripsPage from '../ListTripsPage'
import CreateTripPage from '../CreateTripPage'
import TripDetailsPage from '../TripDetailsPage'
import ApplicationFormPage from '../ApplicationFormPage'

export const routes = {
  // páginas públicas
  home: '/',
  application: '/application-form',
  login: '/login',
  // páginas privadas
  create: '/trips/create',
  list: '/trips/list',
  details: '/trips/details',
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.create} component={CreateTripPage} />
        <Route exact path={routes.list} component={ListTripsPage} />
        <Route exact path={routes.details} component={TripDetailsPage} />
        <Route exact path={routes.application} component={ApplicationFormPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
