import { createSelector } from "reselect";

const getUsers = (state) => {
   return state.usersPage.users;
}

export const getUsersFilter = createSelector(getUsers,
   (users) => {
      return users.filter(u => true);
   }
)


export const getTotalItemsCount = (state) => {
   return state.usersPage.totalItemsCount
}

export const getPageSize = (state) => {
   return state.usersPage.pageSize
}

export const getCurrentPage = (state) => {
   return state.usersPage.currentPage
}

export const getPagesCount = (state) => {
   return state.usersPage.pagesCount
}

export const getIsFetching = (state) => {
   return state.usersPage.isFetching
}

export const getFollowedInProgress = (state) => {
   return state.usersPage.followedInProgress
}

export const getSelectCount = (state) => {
   return state.usersPage.selectCount
}