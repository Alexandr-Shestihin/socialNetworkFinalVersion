import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { setUsers, setPageSize, setPage, setPageCount, setTotalItemsCount, setIsFetching, setFollowedInProgress, thunkCreator, thunkFallow, thunkUnfallow } from '../../redux/users-reducer';
import { compose } from 'redux';
import { getCurrentPage, getFollowedInProgress, getIsFetching, getPagesCount, getPageSize, getTotalItemsCount, getUsersFilter, getSelectCount } from '../../redux/users-selectors';

class UsersFunc extends React.Component {
   componentDidMount() {
      const { currentPage, pageSize } = this.props;
      this.props.thunkCreator(currentPage, pageSize)
   }

   showCountUsersOnPage = (pageNumber) => {
      this.props.thunkCreator(1, pageNumber)
   }
   showPage = (pageNumber) => {
      const { pageSize } = this.props;
      this.props.thunkCreator(pageNumber, pageSize);
   }
   onfollow = (id) => {
      this.props.thunkFallow(id)
   }
   onUnfollow = (id) => {
      this.props.thunkUnfallow(id)
   }

   render() {

      return (
         <Users
            setPageCount={this.props.setPageCount}
            totalItemsCount={this.props.totalItemsCount}
            pageSize={this.props.pageSize}
            showCountUsersOnPage={this.showCountUsersOnPage}
            currentPage={this.props.currentPage}
            showPage={this.showPage}
            users={this.props.users}
            pagesCount={this.props.pagesCount}
            followedInProgress={this.props.followedInProgress}
            onfollow={this.onfollow}
            onUnfollow={this.onUnfollow}
            isFetching={this.props.isFetching}
            selectCount={this.props.selectCount}
         />
      )
   }
}

let mapStateToProps = (state) => {
   return {
      users: getUsersFilter(state),
      totalItemsCount: getTotalItemsCount(state),
      pageSize: getPageSize(state),
      currentPage: getCurrentPage(state),
      pagesCount: getPagesCount(state),
      isFetching: getIsFetching(state),
      followedInProgress: getFollowedInProgress(state),
      selectCount: getSelectCount(state),
   }
}

export default compose(connect(mapStateToProps, {
   setUsers,
   setPageSize,
   setPage,
   setPageCount,
   setTotalItemsCount,
   setIsFetching,
   setFollowedInProgress,
   thunkCreator,
   thunkFallow,
   thunkUnfallow,
}))(UsersFunc)