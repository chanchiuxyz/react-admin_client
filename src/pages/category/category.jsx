import React from 'react'
import { useState,useEffect } from 'react';

import { Button, Card, Space, Table, Modal, message } from 'antd';
import {PlusOutlined, ArrowRightOutlined } from '@ant-design/icons';
//  add category
import AddForm from './add-form'
// modify category
import ModifyForm from './modify-form';
import {reqAddCategory, reqGetCategories, reqModifyCategory } from '../../api'

import './category.css'


// Merchandise Category route


export default function Category() {

    // 0: none 1:show add form 2: show modify form
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
        // console.log('sub',category)
        setCategoryParent({parentId: category._id,name: category.name})
        // console.log('sub',categoryParent)
        getCategories(category._id) 
    }  

    // show ModifyForm
    const showModify = (category) => {
        // console.log(category)
        // show modifty form
        setCategoryObj(category)
        setShowStatus(2)
    }
    // 
    const modifyCategory = (async() => {
        // unshow modify form
        setShowStatus(0)
        const{_id,name} = categoryObj
        const result = await reqModifyCategory(_id, name)
        console.log(result)
        if (result.status === 0) {
            message.success('successed')
            // rerender data
            getCategories() 
        }
        else {
          message.error(result.msg)
        }

    })
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
                <Button onClick={()=> showModify(category)} type='link'>Modify</Button>
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
        // console.log('category',categoryObj)
        const { categoryName, parentId } = categoryObj 
        // console.log(categoryObj)
        const result = await reqAddCategory(categoryName, parentId)
        console.log(result)
        if (result.status === 0) {
            message.success('successed')
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

    const getModifyObj = (categoryName) => {
        
        // setCategoryObj({categoryId,categoryName})
        let newCategory = {...categoryObj}
        newCategory.name = categoryName
        setCategoryObj(newCategory)
        console.log(categoryObj)
    }

    
 
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
                extra={extra}
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
                  {/* modify category form */}
                  <Modal
                      title= "Modify category"
                      open={showStatus === 2}   
                      onCancel={handleCancel}
                      onOk={modifyCategory}      
                  >
                      <ModifyForm 
                          setModifyObj = {getModifyObj}
                          categoryObj = {categoryObj}

                      />

                  </Modal>
              </Card>
              
            </Space>
      </div>
    )



  }
