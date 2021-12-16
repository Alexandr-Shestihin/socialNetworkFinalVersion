import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile, thunkProfile, thunkUserStatus, thunkUpdateStatus, thunkSavePhoto, deletePost, thunkSaveProfile, setEditMode } from './../../redux/profile-reducer';
import { thunkLogout } from './../../redux/auth-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

   refreshProfile() {
      //match совпадение 
      //params параметры, которые в URL
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

   componentDidMount() {
      this.refreshProfile()
   }

   componentDidUpdate(prevProps, PrevState) {
      if (prevProps.match.params.userId != this.props.match.params.userId) {
         return this.refreshProfile();
      }
   }

   render() {

      return (
         < Profile {...this.props}
            profile={this.props.profile}
            status={this.props.status}
            isOwn={
               !this.props.match.params.userId ||
               (this.props.loginUserId == this.props.match.params.userId)
            }//не есть user ID или мой ID равен ID в URL
            thunkUpdateStatus={this.props.thunkUpdateStatus}
            thunkSavePhoto={this.props.thunkSavePhoto}
         />
      )

   }
}

let mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile,
      status: state.profilePage.status,
      isAuth: state.auth.isAuth,
      loginUserId: state.auth.userId,
      editMode: state.profilePage.editMode,
   }
}

export default compose(withRouter, connect(mapStateToProps, { setUserProfile, thunkProfile, thunkUserStatus, thunkUpdateStatus, thunkLogout, thunkSavePhoto, thunkSaveProfile, setEditMode }))(ProfileContainer)
