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
   login(email, password, rememberMe = false, captcha = null) {
      return (
         instance.post('/auth/login', { email, password, rememberMe, captcha })
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
   savePhoto(photoFile) {
      const formData = new FormData();
      formData.append("image", photoFile);
      //это для того, чтобы отправить файл с типом image
      return (
         instance.put('profile/photo/', formData, {
            headers: {
               'Content-Type': 'multipart/form-data'
            }
         })
      )
   },
   saveProfile(profileData) {

      return (
         instance.put('profile', profileData)
      )
   },

}

export const loginAPI = {
   postLogin({ values }) {
      return (
         instance.post({ values })
      )
   },
}

export const securityAPI = {
   getCaptchaUrl() {
      return (
         instance.get('security/get-captcha-url/').then(response => {
            return response
         })
      )
   },
}