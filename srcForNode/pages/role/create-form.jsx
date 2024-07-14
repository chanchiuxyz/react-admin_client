import React, {useState,useEffect,useRef} from 'react'

import { Form, Input } from 'antd'

export default function CreateForm(props) {
  
  const Item = Form.Item

  console.log('props',props)

  const setRoleName = (e) => {
        console.log(e.target.value)
        props.createRoleName(e.target.value)
  } 

  return (
    <Form className="create-form">
        <Item label='Role Name'>
            <Input defaultValue={''} onChange={setRoleName} placeholder='role name' />
        </Item>
    </Form>



  )
}
