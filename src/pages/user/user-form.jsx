import React from 'react'

import { Form, Input, Select } from 'antd'

const {Item} = Form

export default function UserForm(props) {

    const formItemLayout = {
        labelCol: { span: 6 },  
        wrapperCol: { span: 15 },
    }
  return (
    <Form {...formItemLayout} className='user-form'>
        <Item label='User Name:'>
            <Input placeholder='user name' />

        </Item>

        <Item label='Password'>
            <Input type='password' placeholder='password'/>

        </Item>

        <Item label='Mobile'>
            <Input placeholder='mobile' />

        </Item>
        
        <Item label='Email'>
            <Input placeholder='email' />

        </Item>
        
        <Item label='Role'>
            <Select placeholder='select Role'>

            </Select>

        </Item>

    </Form>
  )
}
