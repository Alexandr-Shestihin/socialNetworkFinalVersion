import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, deletePost } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText,
      photos: state.profilePage.profile.photos,
   }
}

const MyPostsContainer = connect(mapStateToProps, { addPostActionCreator })(MyPosts);

export default MyPostsContainer;