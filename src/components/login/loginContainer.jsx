import React from 'react';
import Login from './login';
import { connect } from 'react-redux';
import { thunkLogin } from '../../redux/auth-reducer';

class LoginContainer extends React.Component {
   componentDidMount() {
      this.props.thunkLogin();
   }
   render() {
      return (
         <Login {...this.props} />
      )
   }
}
let mapStateToProps = (state) => {
   return {
      userId: state.auth.userId,
      email: state.auth.email,
      login: state.auth.login,
      isAuth: state.auth.isAuth,
      captchaUrl: state.auth.captchaUrl,
   }
}

export default connect(mapStateToProps, { thunkLogin })(LoginContainer);