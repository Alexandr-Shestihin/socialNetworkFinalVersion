import { createFollowUnfollow } from '../components/common/object-helpers';
import { usersAPI } from './../components/api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'; // ус-т пользователей
const PAGE_SIZE = 'PAGE_SIZE'; // ус-т кол-во пользователей на странице
const SET_PAGE = 'SET_PAGE'; // ус-т активную страницу 
const SET_PAGE_COUNT = 'SET_PAGE_COUNT'; // ус-т кол-во страниц
const SET_TOTAL_ITEMS_COUNT = 'SET_TOTAL_ITEMS_COUNT'; //ус-т общее кол-во пользователей
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'; //переключ анимацию загрузки  
const TOGGLE_IS_FOLLOWED_PROGRESS = 'TOGGLE_IS_FOLLOWED_PROGRESS'; //enabled/disabled btn

let initialeState = {
   users: [],
   pageSize: 100, //кол-во пользователей на странице
   totalItemsCount: 0, //всего пользователей
   currentPage: 1, //стартовая страница
   pagesCount: 5, //кол-во страниц
   isFetching: false, // анимация загрузки
   followedInProgress: [],
   selectCount: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10],//кол-во пользователей на одной странице.
}

const usersReducer = (state = initialeState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: createFollowUnfollow(state.users, action.userId, "id", { followed: true })
         };

      case UNFOLLOW:
         return {
            ...state,
            users: createFollowUnfollow(state.users, action.userId, "id", { followed: false })
         };

      case SET_USERS: {
         return {
            ...state,
            users: action.users
         }
      };

      case PAGE_SIZE: {
         return {
            ...state,
            pageSize: action.pageSize,
            currentPage: 1,
         }
      };

      case SET_PAGE: {
         return {
            ...state,
            currentPage: action.pageNumber,
         }
      };

      case SET_PAGE_COUNT: {
         return {
            ...state,
            pagesCount: Math.ceil(action.totalItemsCount / action.pageSize),
         }
      };

      case SET_TOTAL_ITEMS_COUNT: {
         return {
            ...state,
            totalItemsCount: action.totalItemsCount,
         }
      }

      case TOGGLE_IS_FETCHING: {
         return {
            ...state,
            isFetching: action.isFetching
         }
      }

      case TOGGLE_IS_FOLLOWED_PROGRESS: {
         return {
            ...state,
            followedInProgress: action.status
               ? [...state.followedInProgress, action.id]
               : state.followedInProgress.filter(u => u != action.id),
         }
      }

      default: return state;
   }

}

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setPageSize = (pageSize = 0) => ({ type: PAGE_SIZE, pageSize });
export const setPage = (pageNumber) => ({ type: SET_PAGE, pageNumber });
export const setPageCount = (totalItemsCount, pageSize) => ({ type: SET_PAGE_COUNT, totalItemsCount, pageSize });
export const setTotalItemsCount = (totalItemsCount) => ({ type: SET_TOTAL_ITEMS_COUNT, totalItemsCount });
export const setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setFollowedInProgress = (status, id) => ({ type: TOGGLE_IS_FOLLOWED_PROGRESS, status, id })

export const thunkCreator = (currentPage, pageSize) => async (dispatch) => {

   dispatch(setIsFetching(true));
   dispatch(setPageSize(pageSize));
   dispatch(setPage(currentPage));

   let response = await usersAPI.getUsers(currentPage, pageSize);

   dispatch(setIsFetching(false));
   dispatch(setUsers(response.items));
   dispatch(setTotalItemsCount(response.totalCount));
}

const fallowUnfallow = async (dispatch, id, APIMethod, actionCreator) => {
   dispatch(setFollowedInProgress(true, id))
   let response = await APIMethod(id);

   if (response.data.resultCode === 0) {
      dispatch(actionCreator(id))
   }
   dispatch(setFollowedInProgress(false, id));
}

export const thunkFallow = (id) => {
   return async (dispatch) => {
      fallowUnfallow(dispatch, id, usersAPI.postUsers.bind(usersAPI), follow)
   }
}
export const thunkUnfallow = (id) => {
   return async (dispatch) => {
      fallowUnfallow(dispatch, id, usersAPI.deleteUsers.bind(usersAPI), unfollow)
   }
}

export default usersReducer;