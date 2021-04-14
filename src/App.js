import logo from './logo.svg';
import './App.css';
import './assets/css/main.css';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
