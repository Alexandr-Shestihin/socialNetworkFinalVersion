import React from 'react';
import * as axios from 'axios';

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: { "API-KEY": "304b343a-8302-4414-a6a5-38a17ee13a67" },
})

export const usersAPI = {
   getUsers(currentPage, pageSize) {
      return (
         instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
         })
      )
   },
   deleteUsers(id) {
      return (
         instance.delete(`follow/${id}`)
      )
   },
   postUsers(id) {
      return (
         instance.post(`follow/${id}`, {}, {}
         )
      )
   },

   auth() {
      return (
         instance.get('auth/me')
      )
   },
   login(email, password, rememberMe = false) {
      return (
         instance.post('/auth/login', { email, password, rememberMe })
      )
   },
   logout() {
      return (
         instance.delete('/auth/login')
      )
   },

   getProfile(userId) {
      return (
         profileAPI.getProfile(userId)
      )
   },
}
export const profileAPI = {
   getProfile(userId) {
      return (
         instance.get('profile/' + userId)
      )
   },
   getStatus(userId) {
      return (
         instance.get('profile/status/' + userId)
      )
   },
   updateStatus(statusText) {
      return (
         instance.put('profile/status/', { status: statusText })
      )
   },
}


//не работает
export const loginAPI = {
   postLogin({ values }) {
      return (
         instance.post({ values })
      )
   },
}