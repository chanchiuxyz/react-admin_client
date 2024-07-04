import React, { forwardRef, useEffect } from 'react'

import { Form, Input, Select } from 'antd'

const {Item} = Form
const Option = Select.Option

 const UserForm = forwardRef(function UserForm(props, ref) {



    const formItemLayout = {
        labelCol: { span: 6 },  
        wrapperCol: { span: 15 },
    }
    const {roles, user} = props
    console.log(user)
  return (
    <Form {...formItemLayout} className='user-form' ref={ref} initialValues={user}>
        <Item label='User Name:' name='username' >
            <Input placeholder='user name' />

        </Item>

        <Item label='Password' name='password'>
            <Input type='password' placeholder='password'/>

        </Item>

        <Item label='Mobile' name='phone' >
            <Input placeholder='mobile' />

        </Item>
        
        <Item label='Email' name='email'>
            <Input placeholder='email' />

        </Item>
        
        <Item label='Role' name='role_id'>
            <Select placeholder='select Role'>
               {
                    roles.map(role => 
                        <Option                             
                          key={role._id}
                          value={role.id}  
                        >
                           {role.name}
                        </Option>)
                } 
            </Select>

        </Item>

    </Form>
  )
}
)

export default UserForm;
