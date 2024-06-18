import React from 'react'
import {Button, Card, Input, Select} from 'antd'
import {PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import './merchandise.css'

export default function MerchandiseHome() {
  const{Option} = Select
  const navigate = useNavigate()
  const title = (
      <span className='card-title' >
          <Select
              value='merchandiseName'
              style={{width:150}}
          >
              <Option value='merchandiseName'>by Name</Option>
              <Option value='merchandiseDescrip'>by DescriP</Option>
          </Select>
          <Input 
              placeholder='KeyWord'
              style={{width:150, margin: '0 15px'}}
              

          />
          <Button type='primary'>
              Search
          </Button>

      </span>
  
  )

  const handleAddMechandise = () =>{
      navigate('/merchandise/addupdate')
  }
  const extra = (
      <Button type='primary'
          onClick={handleAddMechandise}
      >
        <PlusOutlined />
        Add

      </Button>
  )
  return (
    <Card className='merchandise-home' style={{textAlign:'left'}}  title={title} extra={extra}>

    </Card> 
  )
}
