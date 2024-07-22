import React, {useState,useEffect} from 'react'

import {Card, Form, Input, Cascader, Upload, Button, message} from 'antd'
import { PlusOutlined } from '@ant-design/icons'



import {reqGetCategories, reqDeleteImg, reqAddMerchandise, uploadImg} from '../../api'
import './merchandise.css'
import { upload } from '@testing-library/user-event/dist/upload'





export default function MerchandiseAddUpdate() {
  // cascader option (categories)
 
  const {Item} = Form
  const { TextArea } = Input;
  const formItemLayout = {
      labelCol: {span:4},
      wrapperCol: {span:8}
  }

  const [options,setOptions] = useState([])
  const [fileList,setFileList] = useState([])
  const [category,SetCategory] = useState({categoryId:'',pCategoryId:''})

 
  useEffect(() => {
    console.log(options)
    getCategories('0')
  },[])
  // onSubmit 
  const formSubmit = async (values) => {
      console.log(values)
      const {name, desc, price} = values
      const {categoryId,pCategoryId} = category
      console.log(typeof(categoryId),typeof(pCategoryId))
      
      const imgs = fileList.map((file) => {
          return file.response.data.name
      })
      // console.log(imgs)
      const merchandise = {name,desc,price,categoryId,pCategoryId,imgs}
      const result = await reqAddMerchandise(merchandise)
      if (result.status === 0) {
          message.success('successed')
      } else {
          message.error('err')
      }

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
    // if (result.status === 0) {
    //   const categories = result.data
    //   // debugger
    //   // if categories
    //   if (parentId === '0'){
    //     initOptions(categories)
    //   } else {
    //     return categories  //subCategories
    //   }
    // }
    if (result) {
          if (parentId === '0'){
            initOptions(result)
          } else {
            return result  //subCategories
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
    if (value.length === 1) {
      SetCategory({categoryId: value[0], pCategoryId: '0'})
    } 
    else if (value.length === 2) {
      SetCategory({categoryId: value[1], pCategoryId: value[0]})
    }

  };

  const handlePreview = (file) => {
      console.log('handlePreview()', file)

  }
  const uploadPicure = async (file) => {
      console.log('upload')
      console.log(file)
      const result = await uploadImg(file)
      console.log(result)


  }
  const handleUploadChange = async (file) => {
      console.log('ff',file.file)
      if (file.file.status === 'done') {
           console.log('uploaded')
          const result = file.file.response //{status: 0, data: {name: 'xxx.jpg', url: url}}
          // if(result.status === 0) {
          //     // message.success('uploaded')
          //     setFileList(file.fileList)
          //     const {name, url} = result.data
          //     console.log(name)
          // } else{
          //     message.error('upload err')
          // }
          // setFileList(file.fileList)
      } else if (file.status === 'removed') { //remove picture
        const resultRemove = file.response //{status: 0, data: {name: 'xxx.jpg', url: url}}
        // if(resultRemove.status === 0) {
        //     const{name} = resultRemove.data
        //     const result = await reqDeleteImg(name)
        //     if (result.status) {
        //         // message.success('removed')
        //         setFileList(file.fileList)
        //     } else {
        //         message.error('remove error')
        //     }

        // }
            const{name} = resultRemove.data
            const result = await reqDeleteImg(name)
            // setFileList(file.fileList)
      }
      setFileList(file.fileList)
      console.log('fileList',fileList)
    
  }


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
                    name='name'
                    rules={[{ required: true, message: 'Please input Merchandise Name!' }]}
              >
                  <Input placeholder='Merchandise Name' />
              </Item>
              {/* Merchandise Description */}
              <Item label='Merchandise Description' 
                    name='desc'
                    rules={[{ required: true, message: 'Please input Merchandise Description!' }]}
              >
                  <TextArea placeholder='Merchandise Description' 
                      rows={4}
                  />
              </Item>
              {/* Merchandise Price */}
              <Item label='Merchandise Price' 
                    name='price'
                    rules={[{ required: true, message: 'Please input Merchandise Price!' }]}
              >
                  <Input type='number'    placeholder='Merchandise Price' 
                      addonAfter='$'
                  />
              </Item>
              {/* Merchandise Category */}
              <Item label='Merchandise Category' 
                    name='category'
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
                   <Upload action='http://localhost:8000/api/upload/'
                    accept='image/*'  
                    name='image' 
                    listType="picture-card" 
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleUploadChange}
                  >
                   <input type="hidden" name="csrfmiddlewaretoken" value="{{ csrf_token }}"></input>
                <button style={{ border: 0, background: 'none' }} type="button">
                  <PlusOutlined />
                  <div style={{ marginTop: 2 }}>Upload</div>
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


