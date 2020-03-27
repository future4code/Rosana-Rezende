import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "../../components/ProtectedRoute";

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
        <Route exact path={routes.application} component={ApplicationFormPage} />
        <Route exact path={routes.login} component={LoginPage} />

        <ProtectedRoute exact path={routes.create} component={CreateTripPage} />
        <ProtectedRoute exact path={routes.list} component={ListTripsPage} />
        <ProtectedRoute exact path={routes.details} component={TripDetailsPage} />

        <Route path="*" component={() => "Página não encontrada"} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
