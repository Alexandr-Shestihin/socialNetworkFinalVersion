import './App.scss';
import React, { Suspense, lazy } from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import For_zorax_css from './components/For_zorax_css/For_zorax_css';
//import DialogsContainer from './components/Dialogs/DialogsContainer';

import { Route, withRouter } from 'react-router';

import store from './redux/redux-store';
import Preload from './components/common/preload/Preload';

import { initialazeApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';

//import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BrowserRouter, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ForFormik = React.lazy(() => import('./components/componentForFormik/forFormik'));
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const LoginContainer = React.lazy(() => import('./components/login/loginContainer'));

class App extends React.Component {

   componentDidMount() {
      this.props.initialazeApp()
   }

   render() {
      if (!this.props.initialazed) {
         return <Preload />
      } else
         return (
            <div className="app-wrapper">
               <HeaderContainer />
               <Nav siteBar={store.getState().siteBar} />
               {/* убрать эту фигню! */}

               <div className="app-wrapper-content">

                  <React.Suspense fallback={<Preload />}>
                     <Switch>
                        <Route path="/forFormik" render={() => <ForFormik />} />
                        <Route path="/Dialogs" component={DialogsContainer} />
                        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />

                        <Route path="/news" render={() => <News />} />
                        <Route path="/music" render={() => <Music />} />
                        <Route path="/settings" render={() => <Settings />} />
                        <Route path="/for_zorax_css" render={() => <For_zorax_css />} />
                        <Route path="/users" render={() => <UsersContainer />} />
                        <Route path="/login" render={() => <LoginContainer />} />
                     </Switch>
                  </React.Suspense>
               </div>
            </div >

         );
   }
}

const mapStateToProps = (state) => {
   return {
      initialazed: state.app.initialized
   }
}

let AppContainer = compose(withRouter,
   connect(mapStateToProps, { initialazeApp }),
)(App);

const MainJSApp = (props) => {
   return <BrowserRouter>
      <Provider store={store}>
         <AppContainer />
      </Provider>
   </BrowserRouter>
}

export default MainJSApp;

