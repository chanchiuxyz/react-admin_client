

import ajax from './ajax'
// import jsonp from 'jsonp'
// import {message} from 'antd'

const BASE = 'http://localhost:8000/api'
// const BASE = ''
// login
// export const reqLogin = (username, password)=> ajax(BASE + '/api/user/getuser/', {username, password}, 'post')
// get token from django server
export const reqGetToken = ()=> ajax(BASE + '/login/', {username:'test', password:'chanchiu'}, 'post')
export const reqLogin = (username, password)=> ajax(BASE + '/users/getuser/' , {username, password}, 'post')

// http://127.0.0.1:8000/api/user/getuser/?username=test&password=test

// get users for node.js
// export const reqUsers = () => ajax(BASE + '/manage/user/list')
//  get users for python django rest framework
export const reqUsers = () => ajax(BASE + '/users/','get')
// delete user
export const reqDeleteUser = (userId) => ajax(BASE + '/manage/user/delete', {userId}, 'POST')
// add/update user
export const reqAddOrUpdateUser = (user) => ajax(BASE + '/manage/user/'+(user._id ? 'update' : 'add'), user, 'POST')


// add category
// export const reqAddCategory = (categoryName, parentId) => ajax(BASE + '/manage/category/add', {categoryName, parentId}, 'post')
// for python
export const reqAddCategory = (categoryName, parentId) => ajax(BASE + `/categories/`, {'name':categoryName, 'parentId':parentId}, 'post')

// get categories

// export const reqGetCategories = (parentId = 0) => ajax(BASE + '/manage/category/list',{parentId})
// for python
export const reqGetCategories = (parentId = 0) => ajax(BASE + '/categories/',{parentId})
// get category name by category id
export const reqCategoryName = (categoryId) => ajax(BASE + `/categories/${categoryId}/`, {},'get')
// modify category
// export const reqModifyCategory = ( categoryId,categoryName) => ajax(BASE + '/manage/category/modify', {categoryId, categoryName}, 'post')
// for python
export const reqModifyCategory = ( categoryId,categoryName) => ajax(BASE + `/categories/${categoryId}/`, {'name':categoryName}, 'patch')

// delete picture
export const reqDeleteImg = (name) => ajax(BASE + '/manage/img/delete', {name}, 'post')
export const uploadImg = (file) => ajax(BASE + '/upload/', {file}, 'post')

// add merchandise
export const reqAddMerchandise = (merchandise) => ajax(BASE + '/products/', merchandise, 'post')

// get merchandise
export const reqMerchandise = ({pageNum, pageSize}) => ajax(BASE + '/products/', {pageNum, pageSize})


// add role
export const reqCreateRole = (roleName) => ajax(BASE + '/roles/', {'name':roleName}, 'post')

// get roles
export const reqRoles = () => ajax(BASE + '/roles/',{},'get')

// update role privilege (authorize) 
export const reqUpdateRole = (role) => ajax(BASE + `/roles/${role._id}/`, role, 'patch')