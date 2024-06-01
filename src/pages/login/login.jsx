import React, { Component } from 'react'

import { Button, Form, Input } from 'antd';


import './login.css'
// import './login.less'
import logo from '../../logo.svg';

export default class Login extends Component {
  render() {
    return (
      <div className='login'>
            <header className='login-header'>
               <img  src={logo} alt="" />
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
