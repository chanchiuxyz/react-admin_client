import React from 'react'
import { useState } from 'react';

import { Button, Card, Space, Table, Modal, message } from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import AddForm from './add-form'
import {reqAddCategory } from '../../api'

import './category.css'


// Merchandise Category route


export default function Category() {

    const[showStatus,setShowStatus] = useState(0)
    const[categoryObj,setCategoryObj] = useState({})
    // const[parentId,SetParentId] = useState(0)

    const dataSource = [
        {
            parentId: '0',
            _id: '11111',
            name: 'Computer',
            _v: 0
        },
        {
            parentId: '0',
            _id: '22222',
            name: 'Phone',
            _v: 0
        },
      ];
      
      const columns = [
        {
            title: 'Category',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'categoryModify',
            width: 330,
            render: () =>(
            <span>
                <Button type='link'>Modify</Button>
                <Button type='link'>View</Button>
            </span>)
          ,
        },
      ];

    const title = 'Category I'
    // show add category Form
    const showAdd = () => {
        setShowStatus(1)
    }
    // cancel add category Form 
    const handleCancel = () => {
        setShowStatus(0)
    } 
    // add category
    const addCategory =(async () => {
        const { categoryName, parentId } = categoryObj 
        console.log(categoryObj)
        const result = await reqAddCategory(categoryName, parentId)
        console.log(result)
        if (result.status === 0) {
          console.log('added category')
        }
        else {
          message.error(result.msg)
        }
    })

    const getCategoryObj = (categoryName,parentId) => {
        setCategoryObj({categoryName,parentId})
    }
    const extra = (
        <Button onClick={showAdd} type='primary'>
              <PlusOutlined />
               Add
        </Button>
    )

    // Add Category

    return (
      <div className='category'>
          <Space className='space' direction="vertical" >
              <Card className='card'
                title={title}
                extra={<a href="#">{extra}</a>}
                // style={{
                //   width: 600,
                // }}
              >
                  <Table 
                      dataSource={dataSource} 
                      columns={columns} 
                      bordered
                  
                  />;
                  {/* add category form */}
                  <Modal
                      title="Add Category"
                      open={showStatus === 1}
                      onCancel={handleCancel}
                      onOk={addCategory}
                  >
                      <AddForm
                          categoryObj={getCategoryObj}
                          // parentId={getParentId}
                      />
                  </Modal> 
              </Card>
              
            </Space>
      </div>
    )



  }
