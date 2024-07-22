import React, {useState,useEffect,useRef} from 'react'

import { Form, Select, Input } from 'antd'

export default function AddForm(props) {
  
    const Item = Form.Item
    const Option = Select.Option
    // categoryParentID
    const [categoryParentId, setCategoryParentId] = useState('0')
    const [categories,setCageories] = useState([])

    // const categorySelect = useRef(null)
    console.log('props',props)
    useEffect(()=>{
        if (props.categoryParent.parentId === '0') {
            setCageories(props.categoriesParent)

        }
        else {
            setCageories([{_id:props.categoryParent.parentId,name: props.categoryParent.name}])
        }
    
        setCategoryParentId(props.categoryParent.parentId)
        console.log('effect')
    },[props])
    const getCategory = (e) => {
        // console.log('e.target.value',e.target.value,categoryParentID)
        props.categoryObj(e.target.value,categoryParentId)
    }

   
    const handleChange = (value) => setCategoryParentId(value)


  return (
    <Form className="add-form">
        {/* <Item label={props.categoryParent.parentId}> */}
        <Item label='Category Parent'>
            <Select onChange={handleChange} 
                // defaultValue= {categoryParentId === '0' ?  '0' : categories[0]._id}
                    // defaultValue='66680865ed5ca334cfd419b9'
                    
             >
                
                {categoryParentId === '0' ? <Option value='0'>Category I</Option> : null}
                
                 {categories.map((categoryObj) => {
                    return(<Option value={categoryObj._id}>{categoryObj.name}</Option>)
                 })}

                {/* option= {categoryOption(props)}
                 */}
                    {/* [value: '0', label: 'Category I'] */} 
                 

            </Select>
        </Item>
        <Item label='Category Name'>
            <Input defaultValue={''} onKeyUp={getCategory} placeholder='input Categary' />
        </Item>
    </Form>



  )
}
