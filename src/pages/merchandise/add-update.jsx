import React from 'react'

import {Card, Form, Input, Cascader, Upload, Button} from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import './merchandise.css'
export default function MerchandiseAddUpdate() {
  const {Item} = Form
  const { TextArea } = Input;
  const formItemLayout = {
      labelCol: {span:4},
      wrapperCol: {span:8}
  }
  return (
      <Card className='add-update' 
          title='Add Merchandise' 
          style={{textAlign:'left'}}
      
      >
          <Form {...formItemLayout}>
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
                  <Input type='number' placeholder='Merchandise Price' />
              </Item>
              {/* Merchandise Category */}
              <Item label='Merchandise Category' 
                    name='merchandiseCategory'
                    rules={[{ required: true, message: 'Please input Merchandise Category!' }]}
              >
                  <Cascader 
                    placeholder='Merchandise Category' 


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

              <Item label='Submit'>
                    <Button type='primary' >Submit</Button>
              </Item>


          </Form>

      </Card>
    
  )
}
