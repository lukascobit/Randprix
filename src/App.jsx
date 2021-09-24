import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Game from "./components/Game";
import Fail from "./components/Fail";
import Win from "./components/Win";

function App() {
  return(
    <Router>
        <Switch>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/fail">
            <Fail/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route>
            <Win/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;