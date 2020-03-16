import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Indexx from "./indexx";
import Profile from "./profile";
import Edit from "./edit";
// import Contact from './components/Contact';
// function routes() {
//   return (
//     <Router>
//       <div>
//         <Route path="/" component={App} />
//         <Route path="/indexx" component={indexx} />
//         {/* <Route path="/contact" component={Contact} /> */}
//       </div>
//     </Router>
//   );
// }
class Routee extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/edit">
            <Edit />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/indexx">
            <Indexx />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default Routee;
