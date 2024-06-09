import React,{useState} from 'react';
import { Navigate, useNavigate,useLocation} from 'react-router-dom'
import { Button, Form, Input,message } from 'antd';
import { reqLogin } from '../../api';

import memoryData from '../../utils/memoryData'
import './login.css'

// import './login.less'
import logo from '../../logo.svg';



const onFinish = (async(values,setUser) => {
    console.log(values)
    
    const{username,password} = values
    // axios req 
    // const [location,setLocation] = useLocation();

    const result = await reqLogin(username,password)
    console.log('await',result)
    if (result.status === 0) {
        // console.log('Welcome back')   
        message.success('welcome back')    
        localStorage.setItem('user',JSON.stringify(result.data))
        memoryData.user = result.data
        setUser(result.data)
        }
    else{
        message.error(result.msg)
    }

/*   //await async alternative .then    
     reqLogin(username,password).then(
                response => {
                   
            if (response.status === 0) {
            console.log('Welcome back')   
            message.success('welcome back')    
            localStorage.setItem('user',JSON.stringify(response.data))
            memoryData.user = response.data
            setUser(response.data)
            }
            else if (response.status === 1){
                // console.log('username or password err')
                message.error('username or password err')
            } 
            // console.log(response)
        },
        error => {
            console.log(error)
            message.error(error)
        }
    ) */
});
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Login = () => {
    const [user,setUser] = useState(null)
    let location = useLocation()
    const navigate = useNavigate()
    // console.log(location)
    // console.log('11',user)

    const memUser = memoryData.user
    if (user) {
        navigate('/admin',{state:{name:user.username,password:user.password}})
        // console.log('lll',location.state)
        // return (<Navigate to="/admin" replace={true} />)
    }
    else 
    return ( 
   
    <div className='login'>
                
        <header className='login-header'>
            <img  src={logo} alt="logo" />
            <h1>React Project: Background Management System </h1>
        </header>

        <section className='login-content'>
            <h2>Login</h2>
    
            <Form
                name="basic"
                labelCol={{
                span: 8,
                }}
                wrapperCol={{
                span: 16,
                }}
                style={{
                maxWidth: 600,
                }}
                initialValues={{
                remember: true,
                }}
                // onFinish={onFinish}
                onFinish={(value)=>onFinish(value,setUser)}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                    required: true,
                    message: 'Please input your username!',
                    },
                ]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                    required: true,
                    message: 'Please input your password!',
                    },
                ]}
                >
                <Input.Password />
                </Form.Item>

                <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
                >
                <Button  className='login-form-btn' type="primary" htmlType="submit">
                    Login
                </Button>
                </Form.Item>
            </Form>
        </section>
    </div>
)}

export default Login;