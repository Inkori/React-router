import React, { Component, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Header";
import Home from "./commanComponents/Home";
import Comments from "./commanComponents/Comments";
import Posts from "./commanComponents/Posts";
import NotFound from "./NotFound";

const ProtectedRoute = ({ cpmponent: Component, ...props }) => {
  return props.isAuthenticated ? (
    <Component {...props} />
  ) : (
    <Redirect to="/login" />
  );
};

class Main extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route path="/" component={Home} exect />
          <Route path="/posts" component={Posts} />
          <Route path="/comments" component={Comments} />
          {/* <Route path="/home/:userId"  component={Home} /> */}
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    );
  }
}

export default Main;
