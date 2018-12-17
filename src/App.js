import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect
} from "react-router-dom";
import Login from "./components/Login";
import Main from "./components/Main";
import "./App.css";

// const User = ({ match }) => {
//   return <div>User {match.paramsuserId}</div>;
// };

// const ConfirmLogin = () => {
//   console.log(NavLink);
//   return (

//   );
// };

const ProtectedRoute = ({ cpmponent: Component, ...props }) => {
  return props.isAuthenticated ? (
    <Component {...props} />
  ) : (
    <Redirect to="/login" />
  );
};

// const Main = () => {
//   return (
//     <Switch>
//       {/* <ProtectedRoute path="/" component={Home} /> */}

//       <Route path="/" component={Home} />
//       {/* <ProtectedRoute path="/home/:userId" component={Home} isAuthenticated />
//       <ProtectedRoute path="/users" component={Home} isAuthenticated /> */}

//     </Switch>
//   );
// };
// const MainHome = () => {
//   return (
//     <Switch>

//     </Switch>
//   );
// };

//<ProtectedRoute path={} component={} />
//exact - чтобы не рендарилась хом по /

const RouterApp = () => {
  return (
    <div>
      <Switch>
        {/* <Route path="/login" component={Login} /> */}
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/routeapp">
        <RouterApp />
      </BrowserRouter>
    );
  }
}

export default App;
