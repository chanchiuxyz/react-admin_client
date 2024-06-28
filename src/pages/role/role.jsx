import React, {useState, useEffect} from 'react'

import { Button, Card, Modal, message, Table } from 'antd'


import CreateForm from './create-form'
import {reqCreateRole, reqRoles} from '../../api'
import { PAGE_SIZE } from '../../utils/constants'
import {formateDate} from '../../utils/dateUtils'

import './role.css'

const columns = [
  {
    title: 'Role Name',
    dataIndex: 'name'
},
{
    title: 'Create Time',
    dataIndex: 'create_time',
    render: (create_time) => formateDate(create_time)
},
{
    title: 'Authorize time',
    dataIndex: 'auth_time',
    render: formateDate
},
{
    title: 'Authorizer',
    dataIndex: 'auth_name'
}
]
export default function Role() {
// show create role form 
  const [isShowCreate, setIsShowCreate] = useState(false)
  //  show authorize role form
  const [isShowAuth, setIsShowAuth] = useState(false)
  // roles 
  const [roles, setRoles] = useState([])
  // selected role
  const [role, setRole] = useState({})
    // role name for create fole
  const[roleName, setRoleName] = useState('')
  // show the roles
  useEffect(() => {
    //  get roles from back-end
      getRoles()

  },[])
  //  get roles from back-end
  const getRoles = async () => {
      const result = await reqRoles()
      if (result.status === 0) {
          const roles = result.data 
          setRoles(roles)
      }
  }

  const showCreateForm = () => {
    setIsShowCreate(true)
  }
  const title = (
    <span>
        <Button type='primary' onClick={showCreateForm}>Create Role</Button> &nbsp;&nbsp;
        <Button type='primary' disabled={!role._id}
            onClick={() => setIsShowAuth(true)}
        >Edit Role
        </Button>
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
      setIsShowCreate(false)
      // console.log(roleName)
      if (roleName === '') {
         message.error('input role name pls')
         return
      }
      const result = await reqCreateRole(roleName)
      console.log(result)
      if (result.status === 0) {
        message.success('successed')
        getRoles()
      }
      else {
        message.error(result.msg)
      }
  }


  return (
    <Card title={title}
        className='role-form'
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
        {/* roles list */}
        <Table 
            bordered
            rowKey='_id'
            dataSource={roles}
            columns={columns}
            pagination={{defaultPageSize:PAGE_SIZE}}
            rowSelection={{
                type: 'radio',
                onSelect: (role) => {
                  setRole(role)
                  console.log(role)
                },
           
                
            }}
        />

        <Modal
            title="Authorize Role"
            open={isShowAuth}
            onCancel={() => {
                setIsShowAuth(false)
            }}
            // onOk={this.updateRole}
        >
            {/* <AuthForm
                ref={this.auth}
                role={role}
            /> */}
        </Modal>



    </Card>
  )
}
