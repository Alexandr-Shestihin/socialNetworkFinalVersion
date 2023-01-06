import './App.scss';
import React from 'react';

import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import Train_CSS from './components/For_css/Train_CSS/Train_CSS';

import { Redirect } from 'react-router-dom';
import { Route, withRouter } from 'react-router';

import store from './redux/redux-store';
import Preload from './components/common/preload/Preload';

import { initialazeApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';

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
   catchAllUnhandledErrors = (reason, promise) => {
      alert("Some Error occured");
      //console.error(promiseRejectionEvent);
   }//обработчик ошибок, которые я не зарезовил

   componentDidMount() {
      this.props.initialazeApp();
      window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
   }// метод жизненного цикла. Срабатывает один раз при инициализации компонента

   componentWillUnmount() {
      window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
   }

   render() {
      if (!this.props.initialazed) {
         return <Preload />
      } else
         return (
            <div className="app-wrapper">

               <HeaderContainer />

               <div className="content">

                  <div className="app-wrapper-container">

                     <Nav siteBar={store.getState().siteBar} />
                     {/* убрать это! */}
                     <div className="app-wrapper-content">
                        <React.Suspense fallback={<Preload />}>
                           <Switch >
                              <Route path="/forFormik" render={() => <ForFormik />} />
                              <Route path="/Dialogs" component={DialogsContainer} />
                              <Route exact path='/' render={() => <Redirect to={"/profile"} />} />
                              <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                              <Route path="/news" render={() => <News />} />
                              <Route path="/music" render={() => <Music />} />
                              <Route path="/settings" render={() => <Settings />} />
                              <Route path="/for_css" render={() => <Train_CSS />} />
                              <Route path="/users" render={() => <UsersContainer />} />
                              <Route path="/login" render={() => <LoginContainer />} />
                              <Route path="*" render={() => <div>404 NOT FOUND</div>} />
                           </Switch>
                        </React.Suspense>
                     </div>
                  </div>

               </div>
               <div className="footer">
                  <div className="content">
                     <p className="footer__text">Social Network 2021-2023</p>
                  </div>
               </div>
            </div>

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

const MainJSApp = () => {
   return <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
         <AppContainer />
      </Provider>
   </BrowserRouter>
}

export default MainJSApp;

