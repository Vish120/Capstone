import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Homepage from './pages/Homepage/Homepage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Subscribe from './pages/Subscribe/Subscribe';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/subscribe" component={Subscribe} />
          <Route exact path="/home" component={Homepage} />
          <Homepage />
        </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;
