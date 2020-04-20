import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import { ProtectedRoute } from '../../components/ProtectedRoute'

import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";
import FeedPage from "../FeedPage";
import DetailPage from "../DetailPage";
import ProfilePage from "../ProfilePage";

export const routes = {
  root: "/",
  register: "/register",
  feed: "/posts/feed",
  detail: "/posts/detail",
  profile: "/posts/profile"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={LoginPage} />
        <Route exact path={routes.register} component={RegisterPage} />

        <ProtectedRoute exact path={routes.feed} component={FeedPage} />
        <ProtectedRoute exact path={routes.detail} component={DetailPage} />
        <ProtectedRoute exact path={routes.profile} component={ProfilePage} />
        
        <Route path="*" component={() => "Página não encontrada"} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
