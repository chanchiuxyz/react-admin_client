import React, {useState} from 'react'

import { Form, Select, Input } from 'antd'

export default function AddForm(props) {
  
    const Item = Form.Item
    const Option = Select.Option
    // categoryParentID
    const [categoryParentID, setCategoryParentID] = useState('0')
    // const categorySelect = useRef(null)
    console.log('props',props)

    const getCategory = (e) => {
        // console.log('e.target.value',e.target.value,categoryParentID)
        props.categoryObj(e.target.value,categoryParentID)
    }

   const handleChange = (value) => setCategoryParentID(value)

  return (
    <Form className="add-form">
        <Item label='Category Parent'>
            <Select onChange={handleChange} defaultValue='0'  >
                <Option value='0'>Category I</Option>
                 {props.categoryP.map((categoryObj) => {
                    return(<Option value={categoryObj._id}>{categoryObj.name}</Option>)
                 })}

            </Select>
        </Item>
        <Item label='Category Name'>
            <Input onKeyUp={getCategory} placeholder='input Categary' />
        </Item>
    </Form>



  )
}
