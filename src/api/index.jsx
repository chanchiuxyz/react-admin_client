

import ajax from './ajax'
// import jsonp from 'jsonp'
// import {message} from 'antd'

const BASE = 'http://localhost:3000'
// const BASE = ''
// login
export const reqLogin = (username, password)=> ajax(BASE + '/login', {username, password}, 'post')
