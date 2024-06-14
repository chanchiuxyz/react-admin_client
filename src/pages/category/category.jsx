import React from 'react'
import { useState,useEffect } from 'react';

import { Button, Card, Space, Table, Modal, message } from 'antd';
import {PlusOutlined, ArrowRightOutlined } from '@ant-design/icons';
import AddForm from './add-form'
import {reqAddCategory, reqGetCategories } from '../../api'

import './category.css'


// Merchandise Category route


export default function Category() {


    const [showStatus,setShowStatus] = useState(0)
    const [categoryObj,setCategoryObj] = useState({})
    // categories parent(category I)
    const [categoriesParent,setCategoriesParent] = useState([])
    // category parent(category I)
    const [categoryParent,setCategoryParent] = useState({parentId:'0',name: 'Category I'})
     // subCategories
    const [categoriesSub,setCategoriesSub] = useState([])
    // loading
    const [loading, setLoading] = useState(false)
   
    // const[parentId,SetParentId] = useState(0)
    const getCategories = async(parentId='0') => {
        // loading...
        setLoading(true)
        const result = await reqGetCategories(parentId)
        // loaded...
        console.log('pp',parentId)
        setLoading(false)
        if (parentId === '0'){
            setCategoriesParent(result.data)
            console.log('pp',categoriesParent)
        }
        else {
            setCategoriesSub(result.data)
        }
        console.log('resut',result)

        
    }
    // get Category I
    useEffect(()=>{

        getCategories() 
    },[])

    const showCategories = () => {
        setCategoryParent({parentId:'0',name: 'Category I'})
        setCategoriesSub([])
    }
    // show Subcategories 
    const showSubCategories = (category)=> {
        console.log('sub',category)
        setCategoryParent({parentId: category._id,name: category.name})
        // console.log('sub',categoryParent)
        getCategories(category._id) 
    }  
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
            width: 300,
            render: (category) =>(
            <span>
                <Button type='link'>Modify</Button>
                {categoryParent.parentId === '0' ?  <Button type='link' onClick={()=> showSubCategories(category)}>View SubCategories</Button> : null }
           
            </span>)
          ,
        },
    ];


    // show add category Form
    const showAdd = () => {
        setCategoryParent(categoryParent)
        setShowStatus(1)

    }

    // cancel add category Form 
    const handleCancel = () => {
        setShowStatus(0)
    } 

    // add category to back-end --to to DB
    const addCategory =(async () => {
        // invisible AddForm
        setShowStatus(0)
        console.log('category',categoryObj)
        const { categoryName, parentId } = categoryObj 
        console.log(categoryObj)
        const result = await reqAddCategory(categoryName, parentId)
        console.log(result)
        if (result.status === 0) {
            // message.success(categoryName,'added')
          getCategories() 
        }
        else {
          message.error(result.msg)
        }
    })
    // pass the function by props to AddForm
    const getCategoryObj = (categoryName,parentId) => {
        setCategoryObj({categoryName,parentId})
    }
    const extra = (
        <Button onClick={showAdd} type='primary'>
              <PlusOutlined />
               Add
        </Button>
    )

    
 
    const title =  categoryParent.parentId === '0' ? 'Categories I' : (
        <span>
            <Button type='link' onClick={showCategories}>Categories I</Button>
            <ArrowRightOutlined />
            <span>{categoryParent.name}</span>
        </span>
    )
    return (
      <div className='category'>
          <Space className='space' direction="vertical" >
              <Card className='card'
                title={title}
                // title={categoryParent.parentId}
                extra={<a href="#">{extra}</a>}
                // style={{
                //   width: 600,
                // }}
              >
                  <Table 
                      dataSource={categoryParent.parentId === '0' ? categoriesParent : categoriesSub} 
               
                      columns={columns} 
                      bordered
                      rowKey='_id'
                      pagination={{defaultPageSize: 5,
                                   showQuickJumper:true
                      }}
                      pag
                      loading = {loading}
                  
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
                          categoriesParent = {categoriesParent}
                          categoryParent = {categoryParent}
                          
                          // parentId={getParentId}
                      />
                  </Modal> 
              </Card>
              
            </Space>
      </div>
    )



  }
