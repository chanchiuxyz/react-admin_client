import React, {useState,useEffect} from 'react'

import {Card, Form, Input, Cascader, Upload, Button} from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import {reqGetCategories} from '../../api'
import './merchandise.css'


const optionLists = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    isLeaf: false,
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    isLeaf: false,
  },
];
export default function MerchandiseAddUpdate() {
  // cascader option (categories)
 
  const {Item} = Form
  const { TextArea } = Input;
  const formItemLayout = {
      labelCol: {span:4},
      wrapperCol: {span:8}
  }

  const[options,setOptions] = useState([])
  useEffect(() => {
    console.log(options)
    getCategories('0')
  },[])
  // onSubmit 
  const formSubmit = (values) => {
      console.log(values)
  }
  
  const initOptions = async (categories) => {
      const options = categories.map(category => ({
          value: category._id, 
          label: category.name,
          isLeaf: false,
          // children: [],
      }))

      setOptions(options)
      // console.log(options)
  }
  const getCategories = async (parentId) => {
    const result = await reqGetCategories(parentId)
    console.log(parentId)
    if (result.status === 0) {
      const categories = result.data
      // debugger
      // if categories
      if (parentId === '0'){
        initOptions(categories)
      } else {
        return categories  //subCategories
      }
    }
  }
  // cascader load subCategories 
  const loadData = async (selectedOptions) => {
    const targetOption = selectedOptions[selectedOptions.length - 1]
    console.log(targetOption)
    targetOption.loading = true
      // get subCategories
      const subCategories = await getCategories(targetOption.value)
      targetOption.loading = false

      // if have subCategories
      if (subCategories && subCategories.length > 0) {
          const childrenOption = subCategories.map(sub => ({
            value: sub._id,
            label: sub.name,
            isLeaf: true
          }))
          targetOption.children = childrenOption    
      } else {  // if have no children
        targetOption.isLeaf = true
      }

      setOptions([...options])


  }

  const onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
  };


  return (
      <Card className='add-update' 
          title='Add Merchandise' 
          style={{textAlign:'left'}}
      
      >
          <Form {...formItemLayout} 
              onFinish={formSubmit}
          >
              {/* Merchandise Name */}
              <Item label='Merchandise Name' 
                    name='merchandiseName'
                    rules={[{ required: true, message: 'Please input Merchandise Name!' }]}
              >
                  <Input placeholder='Merchandise Name' />
              </Item>
              {/* Merchandise Description */}
              <Item label='Merchandise Description' 
                    name='merchandiseDescri'
                    rules={[{ required: true, message: 'Please input Merchandise Description!' }]}
              >
                  <TextArea placeholder='Merchandise Description' 
                      rows={4}
                  />
              </Item>
              {/* Merchandise Price */}
              <Item label='Merchandise Price' 
                    name='merchandisePrice'
                    rules={[{ required: true, message: 'Please input Merchandise Price!' }]}
              >
                  <Input type='number'    placeholder='Merchandise Price' 
                      addonAfter='$'
                  />
              </Item>
              {/* Merchandise Category */}
              <Item label='Merchandise Category' 
                    name='merchandiseCategory'
                    rules={[{required:true, message: 'Please input Merchandise Category!' }]}
              >
                  <Cascader 
                    placeholder='Merchandise Category' 
                    options={options}
                    loadData={loadData}
                    onChange={onChange}
                    changeOnSelect 


                  />
              </Item>
              {/* Merchandise pic upload */}
              <Item label='Merchandise Picture' >
                  <Upload action="/upload.do" listType="picture-card">
                <button style={{ border: 0, background: 'none' }} type="button">
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </button>
          </Upload>
              </Item>
              {/* Submit */}
              <Item label='Submit'>
                    <Button htmlType="submit" ontype='primary' >Submit</Button>
              </Item>


          </Form>

      </Card>
    
  )
}
