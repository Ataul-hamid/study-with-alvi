import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './components/Home/Home';
import About from './components/About//About'

import Header from './components/Header/Header';
import Details from './components/ServiceDetails/ServiceDetails'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';




function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home>

            </Home>


          </Route>

          <Route path="/about">
            <About></About>

          </Route>
          <Route exact path="/">
            <Home></Home>

          </Route>

          <Route path="/services">
            <Services></Services>
          </Route>


          <Route path="/contact">
            <Contact></Contact>

          </Route>

          <Route path="*">
            <NotFound></NotFound>


          </Route>

        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
