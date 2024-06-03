import React, { Component } from 'react'
// navigate replace Redirect
import { Navigate} from 'react-router-dom'

import { Button, Form, Input, message } from 'antd';
// import axios from 'axios'

import { reqLogin } from '../../api';

import './login.css'

// import './login.less'
import logo from '../../logo.svg';
// import Password from 'antd/es/input/Password';

export default class Login extends Component {
        state = {user:null}
        // submit username and password to login
        onFinish = (values) => {
            // console.log('Success:', values);
            const{username,password} = values
            // axios req 
            

            reqLogin(username,password).then(
                        response => {
                           
                    if (response.status === 0) {
                    console.log('Welcome back')   
                    message.success('welcome back')    
                    localStorage.setItem('user',JSON.stringify(response.data))
                    this.setState({user:username})
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
            )

        };
        onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
            };
  render() {
        const {user} = this.state
        if (user) return (<Navigate to="/admin" replace={true} />)
        else 
        return (
            
            <div className='login'>
                
                    <header className='login-header'>
                    <img  src={logo} alt="logo" />
                    <h1>React Project: Background Management System </h1>
                    </header>

                    <section className='login-content'>
                        <h2>Login</h2>
                        {/* UI login component */}
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

                                onFinish={this.onFinish}
                                onFinishFailed={this.onFinishFailed}
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
                                    {
                                        min: 4,
                                        message: 'more than 4 charactors',

                                    },
                                    {
                                        max: 12,
                                        message: 'less than 12 charactors',

                                    }
                                ]}
                                initialValue= 'admin'
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
                                    {
                                        min: 4,
                                        message: '4 or more charators pls',
                                    }
                                ]}
                                >
                                <Input.Password />
                                </Form.Item>

                                {/* <Form.Item
                                name="remember"
                                valuePropName="checked"
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                                >
                                <Checkbox>Remember me</Checkbox>
                                </Form.Item> */}

                                <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                                >
                                <Button className='login-form-btn' type="primary" htmlType="submit">
                                    Login
                                </Button>
                                </Form.Item>
                        </Form>
                    </section>
            </div>
        )
  }

}
