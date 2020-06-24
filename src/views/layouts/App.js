import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { MockBrowser, AuthorizedRoute } from "../../utils";
import store from "../../state";

import UnauthorizedLayout from './unauthorizedLayout'
import PrimaryLayout from './primaryLayout'

export default function App(props) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          {/* <MockBrowser /> */}
          <Switch>
            <Route path="/auth" component={UnauthorizedLayout} />
            <AuthorizedRoute path="/app" component={PrimaryLayout} />
            <Redirect to="/auth" />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
