import React, { useEffect, useState } from 'react'

import { Button, Card, Table, Modal } from 'antd'

import './user.css'
import { PAGE_SIZE } from '../../utils/constants'
import { formateDate } from '../../utils/dateUtils'
import { reqUsers } from '../../api'
import UserForm from './user-form'


export default function User() {
  
  const [users, setUsers] = useState([])
  const [user, setUser] = useState(null)
  const [roles, setRoles] = useState([])
  const [isShow, setIsShow] = useState(false)


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

      }
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
            // render: (role_id) => roleNames[role_id]
        },
        {
            title: 'Operate',
            render: (user) => (
                <span>
                    <Button type='type' onClick={() => console.log(user) }>Modify</Button>
                    <Button type='type' onClick={() => console.log(user)}>Delete</Button>
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
            title={user && user.id ? 'Modify User' : 'Create User'}
            open={isShow}
            onCancel={()=> setIsShow(false)}
        >
          <UserForm />

        </Modal>
    </Card>
  )
}
