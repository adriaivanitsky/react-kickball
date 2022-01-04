import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Teams from './views/Teams';
import Players from './views/Players';
import TeamId from './views/TeamId';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavLink to="/teams">Teams</NavLink>
          <NavLink to="/players">Players</NavLink>
        </header>
        <Switch>
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/players" component={Players} />
          <Route exact path="/teams/:id" component={TeamId} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
