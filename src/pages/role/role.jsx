import React, {useState, useEffect} from 'react'

import { Button, Card, Modal, message, Table } from 'antd'


import CreateForm from './create-form'
import {reqCreateRole, reqRoles, reqUpdateRole} from '../../api'
import { PAGE_SIZE } from '../../utils/constants'
import {formateDate} from '../../utils/dateUtils'
import AuthForm from './auth-form'

import './role.css'


const columns = [
  {
    title: 'Role Name',
    dataIndex: 'name'
},
{
    title: 'Create Time',
    dataIndex: 'create_time',
    // render: (create_time) => formateDate(create_time)
},
{
    title: 'Authorize time',
    dataIndex: 'auth_time',
    // render: (auth_time) => formateDate(auth_time)
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
  console.log('----------',roles)
  // selected role
  const [role, setRole] = useState({})
    // role name for create fole
  const[roleName, setRoleName] = useState('')
  // authority
  const [authMenus, setAuthMenus] = useState([]) 
  // Ref auth from
  // const auth = useRef() 
  // show the roles
  useEffect(() => {
    //  get roles from back-end
      getRoles()

  },[])
  //  get roles from back-end
  const getRoles = async () => {
      const result = await reqRoles()
      console.log('getroles',result)
      if (result) {
          // const roles = result
          setRoles(result)
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
      if (result) {
        message.success('successed')
        getRoles()
      }
      else {
        message.error(result.msg)
      }
  }
  // update role(authorize)
  const updateRole = async () => {
      // console.log(authMenus)
      setIsShowAuth(false)
      const updateRole = role
      const menus = authMenus
      updateRole.menus = menus
      updateRole.auth_time = Date.now
      updateRole.authname = 'admin'
      const result = await reqUpdateRole(updateRole)
      
      if (result.status === 0) {
          message.success('authorized')
          getRoles()
      } else {
          message.error('authorize err')
      }

  }
// 
  const getAuth = (menu) => {
      setAuthMenus(menu)
      const updateRole = role
      const menus = authMenus
      updateRole.menus = menus
      setRoles([...roles])
  }
  return (
    <Card title={title}
        className='role-form'
        style={{textAlign:'left'}}  
    >

        {/* create role form */}
        <Modal
                      title="Create Role"
                      open={isShowCreate}
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
            onOk={updateRole}
        >
            <AuthForm
                setAuth={getAuth}
                role={role}
            />
        </Modal>



    </Card>
  )
}
