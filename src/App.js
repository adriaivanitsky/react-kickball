import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Teams from './views/Teams';
import Players from './views/Players';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header"></header>
        <Switch>
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/players" component={Players} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
