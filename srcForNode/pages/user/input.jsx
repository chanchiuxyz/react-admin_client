import { forwardRef } from 'react';
import { Form, Input, Select } from 'antd'
const {Item} = Form

const MyInput = forwardRef(function MyInput(props, ref) {
    const formItemLayout = {
        labelCol: { span: 6 },  
        wrapperCol: { span: 15 },
    }
  return (
    
    
    <Form {...formItemLayout}  className='user-form' ref={ref}>
    <Item label='User Name:' name='username'>
        <Input placeholder='user name' />

    </Item>

    <Item label='Password' name='password'>
        <Input type='password' placeholder='password'/>

    </Item>

    <Item label='Mobile' name='phone'>
        <Input placeholder='mobile' />

    </Item>
    
    <Item label='Email' name='email'>
        <Input placeholder='email' />

    </Item>
    
    <Item label='Role' name='role_id'>
        <Select placeholder='select Role'>

        </Select>

    </Item>

</Form>
    
  );
});

export default MyInput;