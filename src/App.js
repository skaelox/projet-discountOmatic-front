
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './page/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Navbar ici */}

{/* Ajouter les liens ici */}
<Switch>

  {/* Ajouter les routes ici */}
  <Route exact path="/">
    <Home/>
  </Route>

</Switch>

        <h1>Page test</h1>
      </header>
    </div>
  );
}

export default App;
