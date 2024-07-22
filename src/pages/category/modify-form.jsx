// import { useEffect,useState } from 'react'
import React from 'react'
import { Form,Input } from 'antd'



export default function ModifyForm(props) {
    const Item = Form.Item
    // const[name,setName] = useState('')
    // // const categoryId = props.categoryObj._id
    // useEffect((props)=>{
    //      setName(props.categoryObj.name) 
    // },[])
    
    const getCategory = (e) => {
        const categoryName = e.target.value 
      
        console.log(categoryName)
        props.setModifyObj(categoryName)
    }
  return (
    <Form className="update-form">
    <Item label='category name'>

            <Input onKeyUp={getCategory}                    placeholder='modify category'
                
            />
        
    </Item>
</Form>
  )
}
