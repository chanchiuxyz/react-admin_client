import React, { useEffect, useRef, useState } from 'react'

import { Button, Card, Table, Modal, message } from 'antd'

import './user.css'
import { PAGE_SIZE } from '../../utils/constants'
import { formateDate } from '../../utils/dateUtils'
import { reqAddOrUpdateUser, reqDeleteUser, reqUsers } from '../../api'
import UserForm from './user-form'
// import MyInput from './input'


export default function User() {
  
  const [users, setUsers] = useState([])
  const [user, setUser] = useState(null)
  const [roles, setRoles] = useState([])
  const [roleNames, setRoleNames] = useState({})
  const [isShow, setIsShow] = useState(false)
  const formRef = useRef(null)


  useEffect(() => {
      getUsers()
  },[])

  const getUsers = async () => {
      const result = await reqUsers()
      console.log(result)
      if (result.status === 0) {
          const {users, roles} = result.data
          setUsers(users)
          setRoles(roles)
          initRoleNames(roles)

      }
  }

  const initRoleNames = (roles) => {
     const roleNames = roles.reduce((pre, role) => {
          pre[role._id] = role.name
          return pre
      },{})
          setRoleNames(roleNames)
          console.log(roleNames)
  }

  const addShow = () => {
      setUser(null)
      setIsShow(true)
  }
  const title = (
          <Button type='primary' onClick={addShow}> 
              Create User
          </Button>
  )
//  create or update user. if user ? update : create
  const addOrUpdateUser = async() => {
    try {
      setIsShow(false)
      const values = await formRef.current.validateFields();
      // console.log('formData:', values);
      // handle form data
      const formUser = values
      if (user) {
        formUser._id = user._id
      }
      const result = await reqAddOrUpdateUser(formUser)
      if (result.status === 0) {
        // console.log(user)
        message.success(user? 'update successed' : 'create successed')
        getUsers()
      }
    } catch (errorInfo) {
      console.log('err:', errorInfo);
    }
  }
//  delete user
  const deleteUser = async (user) => {
      const result = await reqDeleteUser(user._id)
      if (result.status === 0) {
          message.success('deleted')
      } else {
          message.error('delete err', result.errorInfo)
      }
      
      getUsers()
  }

  const showUpdate = (user) => {
      setUser(user)
      setIsShow(true)

  }
  const columns = [
        {
            title: 'User Name',
            dataIndex: 'username'
        },
        {
            title: 'Email',
            dataIndex: 'email'
        },
        {
            title: 'Mobile',
            dataIndex: 'phone'
        },
        {
            title: 'Cerate time',
            dataIndex: 'create_time',
            render: formateDate
        },
        {
            title: 'Role',
            dataIndex: 'role_id',
            render: (role_id) => roleNames[role_id]
        },
        {
            title: 'Operate',
            render: (user) => (
                <span>
                    <Button type='link' onClick={() => showUpdate(user)}>Modify</Button>
                    <Button type='link' onClick={() => deleteUser(user)}>Delete</Button>
                </span>
            )
        }
    ]


  return (
    <Card className='user-form' title={title} style={{textAlign:'left'}}  >
        <Table 
            bordered
            rowKey='_id'
            dataSource={users}
            columns={columns}
            pagination={{defaultPageSize: PAGE_SIZE,showQuickJumper: true}}
        />

        <Modal 
            title={user && user._id ? 'Modify User' : 'Create User'}
            open={isShow}
            onCancel={()=> setIsShow(false)}
            onOk={addOrUpdateUser}
            destroyOnClose
        >
          {/* <UserForm ref={formRef} /> */}
          <UserForm ref={formRef}
                    roles={roles}
                    user={user}
          />

        </Modal>
    </Card>
  )
}
