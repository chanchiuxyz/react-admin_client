
import axios from 'axios'
import  { message } from 'antd'
// import { Header } from 'antd/es/layout/layout'

// rewrite ajax

const ajax = (url, data={}, method='get') => {
    console.log('axios',data,url,method)

    const token = localStorage.getItem('token')
    console.log(token)
    // base64(test:chanchiu) = dGVzdDpjaGFuY2hpdQ
    axios.defaults.headers.common['Authorization'] = `Basic dGVzdDpjaGFuY2hpdQ==`;
    return new Promise(function (resolve, reject) {
        let promise
        // ajax asyn request
        console.log(url,data,method)
        if(method === 'get') {
            promise = axios.get(url, {
                params: data
            })
        } else if(method === 'post') {
            // if (url.indexOf('api/login')>0) {
            //     url += '/?usernmae=' + data.username + '&password=' + data.password
            //     console.log('url',url)
            // }
            promise = axios.post(url, data)
        }  else if(method === 'patch') {
            // if (url.indexOf('api/login')>0) {
            //     url += '/?usernmae=' + data.username + '&password=' + data.password
            //     console.log('url',url)
            // }
            promise = axios.patch(url, data)
        }


        promise.then(response => {
            // if success resolve(response.data)
            console.log(response.data)
            resolve(response.data)
            // if err, skip reject(reason) 
        }).catch(error => {
            message.error('ReqError:' + error.message)
        })
    })

}

export default ajax
// req login
// ajax('/login', {username: 'admin', passsword: 'admin'}, 'POST').then()
// insert user
// ajax('/manage/user/add', {username: 'Tom', passsword: '12345', phone: '6723806541'}, 'POST').then()