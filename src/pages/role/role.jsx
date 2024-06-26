import React, {useState} from 'react'

import { Button, Card, Modal, message } from 'antd'


import CreateForm from './create-form'
import {reqCreateRole} from '../../api'

export default function Role() {
// if show create role form 
  const[isShowCreate, setIsShowCreate] = useState(0)
  // role name 
  const[roleName, setRoleName] = useState('')


  const showCreateForm = () => {
    setIsShowCreate(1)
  }
  const title = (
    <span>
        <Button type='primary' onClick={showCreateForm}>Create Role</Button> &nbsp;&nbsp;
        <Button type='primary' disabled>Edit Role</Button>
    </span>
  )
// handle cancel for create role form
  const handleCancel = () => {
    setIsShowCreate(0)
} 
// pass the function to create form for set role name
  const createRoleName = (roleName) => {
    setRoleName(roleName)
  }
// create role 
  const createRole = async() => {
      setIsShowCreate(0)
      // console.log(roleName)
      if (roleName === '') {
         message.error('input role name pls')
         return
      }
      const result = await reqCreateRole(roleName)
      console.log(result)
      if (result.status === 0) {
        message.success('successed')
      }
      else {
        message.error(result.msg)
      }
  }


  return (
    <Card title={title}
        style={{textAlign:'left'}}  
    >

        {/* create role form */}
        <Modal
                      title="Create Role"
                      open={isShowCreate === 1}
                      onCancel={handleCancel}
                      onOk={createRole}
                  >
                      <CreateForm
                          createRoleName={createRoleName}
                          // categoriesParent = {categoriesParent}
                      />
                  </Modal> 

    </Card>
  )
}
