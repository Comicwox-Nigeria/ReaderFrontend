import React, {Component} from 'react';

import './App.css';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// Bring in to use redux
import { Provider } from 'react-redux';

//To decode JWT token from backend and get the information

import jwt_decode from 'jwt-decode';

//To set the header just like in postman

import setAuthToken from './utils/setAuthToken';

//Actions

import {logoutReader, setCurrentUser} from "./actions/authAction";

//Bringing in the STORE

import store from './store';


// Components

import ScrollToTopRoute from './components/common/ScrollToTop';

import Navbar from './components/layout/Navbar';

import Toolbar from './components/layout/Toolbar';

import SideDrawer from './components/layout/SideDrawer';

import Backdrop from './components/layout/Backdrop';

import Footer from './components/layout/Footer';

import Home from './components/home/Home';

import Login from './components/authentication/Login';

import Register from './components/authentication/Register';

import SearchedComics from './components/searchedComics/searchedComics';

import Dashboard from './components/dashboard/Dashboard';

import AboutUs from './components/about-us/AboutUs';

import Studios from './components/studios/Studios';

import ComicWithChapter from './components/comicWithChapters/ComicWithChapter';

import SingleComic from './components/singleComic/SingleComic';

import ContactUs from './components/contact-us/ContactUs';

import NotFound from './components/notfound/NotFound';

import PrivateRoute from './components/common/PrivateRoute';

import { loadUser } from "./actions/authAction";
//Check for Token

if (localStorage.token) {

  //  Set Auth token header auth
  // setAuthToken(localStorage.ReaderjwtToken);

    const config = {
        headers: {
            "Content-type": "application/json"
        }
    };

    //If token, add to headers
    if (localStorage.token) {
        config.headers['x-auth-token'] = localStorage.token
    }


    //  Decode Token and get ADMIN information
  const decoded = jwt_decode(localStorage.token);

  //  Set current use and isAuthenticated

    store.dispatch(loadUser());
  store.dispatch(setCurrentUser(decoded));


//  Check for expired token
  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {

    store.dispatch(logoutReader());

    window.location.href = '/';

  }
}

class App extends Component {

    state = {
      sideDrawerOpen: false
    };
    /*constructor(props) {
        super(props);

        this.state = {
            sideDrawerOpen: false
        };

        this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);

    }
*/
    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false})
    }

  render() {

      let sideDrawer;
      let backdrop;

      if (this.state.sideDrawerOpen) {
          sideDrawer = <SideDrawer/>;
          backdrop = <Backdrop click={this.backdropClickHandler}/>;
      }


      return (
        <Provider store={ store }>

          <Router>

              {/*<div style={{height: '100%'}}>*/}

                  <Navbar drawerClickHandler={this.drawerToggleClickHandler} />

                  {/*<Toolbar drawerClickHandler={this.drawerToggleClickHandler} />*/}

                  {/*{ sideDrawer }*/}

                  <SideDrawer show={this.state.sideDrawerOpen} />

                  { backdrop }

                  <Route exact path='/' component={Home} />

                  <div>

                      <Switch>

                      <Route  path='/home' component={Home} />

                      <Route  path='/login' component={Login} />

                      <Route  path='/create-account' component={Register} />

                      <PrivateRoute  path='/dashboard' component={Dashboard} />

                      <Route  path='/comic/:id' component={ComicWithChapter} />

                      <Route  path='/search/comicTitle' component={SearchedComics} />

                      <Route  path='/comics/chapter/:id' component={SingleComic} />

                      <Route  path='/about-us' component={AboutUs} />

                      <Route  path='/contact-us' component={ContactUs} />


                      <Route path='/404' component={NotFound} />

                      {/*<Redirect path='*' to='/404'/>*/}

                      </Switch>
                  </div>

                  <Footer/>

              {/*</div>*/}

          </Router>

        </Provider>
    );

  }

}

export default App;
