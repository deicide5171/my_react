import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Dashboard from './components/Dashboard';
import MyMap from './components/MyMap';
import Board from './components/Board';
import Blog from './components/Blog';
import Sns from './components/Sns';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/myMap' component={MyMap} />
          <Route exact path='/board' component={Board} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/sns' component={Sns} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
