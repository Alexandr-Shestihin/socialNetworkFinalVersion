import React from 'react';
import Dialogs from './Dialogs';
import { addMassageActionCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from './../hoc/withAuthRedirect';
import { compose } from 'redux';

class DialogsContainer extends React.Component {
   componentDidMount() {

   }
   render() {
      return (
         <Dialogs {...this.props} />
      )
   }
}

let mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage,
      newMassageText: state.dialogsPage.newMassageText,
      isAuth: state.auth.isAuth,
   }
}

export default compose(connect(mapStateToProps, { addMassageActionCreator }), withAuthRedirect)(DialogsContainer)
