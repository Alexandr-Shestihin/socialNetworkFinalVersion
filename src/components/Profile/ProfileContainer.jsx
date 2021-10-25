import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile, thunkProfile, thunkUserStatus, thunkUpdateStatus, deletePost } from './../../redux/profile-reducer';
import { thunkLogout } from './../../redux/auth-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = this.props.loginUserId
         if (!userId) {
            this.props.history.push("/Login");
         }
      };

      this.props.thunkProfile(userId);
      this.props.thunkUserStatus(userId);
   }
   render() {

      return (
         < Profile {...this.props} profile={this.props.profile} status={this.props.status} thunkUpdateStatus={this.props.thunkUpdateStatus} />
      )

   }
}

let mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile,
      status: state.profilePage.status,
      isAuth: state.auth.isAuth,
      loginUserId: state.auth.userId,
   }
}

export default compose(withRouter, connect(mapStateToProps, { setUserProfile, thunkProfile, thunkUserStatus, thunkUpdateStatus, thunkLogout }))(ProfileContainer)
