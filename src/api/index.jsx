

import ajax from './ajax'
// import jsonp from 'jsonp'
// import {message} from 'antd'

const BASE = 'http://localhost:3000'
// const BASE = ''
// login
export const reqLogin = (username, password)=> ajax(BASE + '/login', {username, password}, 'post')

// add category
export const reqAddCategory = (categoryName, parentId) => ajax(BASE + '/manage/category/add', {categoryName, parentId}, 'post')

// get categories

export const reqGetCategories = (parentId = 0) => ajax(BASE + '/manage/category/list',{parentId})

// modify category
export const reqModifyCategory = ( categoryId,categoryName) => ajax(BASE + '/manage/category/modify', {categoryId, categoryName}, 'post')