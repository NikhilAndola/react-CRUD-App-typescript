import { FC } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/layout/Navbar"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Contact from './components/pages/Contact';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import ViewUser from './components/users/ViewUser';
import UpdateUser from './components/users/UpdateUser';
import AddUser from './components/users/AddUser';
import PageNotFound from './components/pages/PageNotFound';

const App: FC = () => {
  return (
    <Router>
    <div>
        <Navbar/>
      
      <Switch>

      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/about">
        <About/>
      </Route>
      <Route exact path="/contact">
        <Contact/>
      </Route>

      <Route exact path="/add">
						<AddUser />
					</Route>

    <Route exact path="/viewUser/:id">
      <ViewUser/>
    </Route>

    <Route exact path="/update/:id">
      <UpdateUser/>
    </Route>

    <Route>
						<PageNotFound/>
					</Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;