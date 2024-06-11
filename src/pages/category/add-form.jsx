import React from 'react'

import { Form, Select, Input } from 'antd'

export default function AddForm(props) {
  
    const Item = Form.Item
    const Option = Select.Option
  return (
    <Form className="add-form">
        <Item>
            <Select>
                <Option value='0'>Category I</Option>
                {/* <Option value='1'>Electronics</Option> */}

            </Select>
        </Item>

        <Input onKeyUp={(e)=>{
            props.categoryObj(e.target.value,0)
        }} placeholder='input Categary' />
    </Form>



  )
}
