
import axios from 'axios'
import  { message } from 'antd'

// rewrite ajax

const ajax = (url, data={}, method='get') => {
    // console.log('axios',data)
    return new Promise(function (resolve, reject) {
        let promise
        // ajax asyn request
        // console.log(url,data,method)
        if(method === 'get') {
            promise = axios.get(url, {
                params: data
            })
        } else {
            promise = axios.post(url, data)
        }

        promise.then(response => {
            // if success resolve(response.data)
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