import React, {useState, useEffect} from 'react'
import {Button, Card, Input, Select, Table, message} from 'antd'
import {PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import {reqMerchandise} from '../../api'
import './merchandise.css'
import { PAGE_SIZE } from '../../utils/constants';



export default function MerchandiseHome() {
   
    const columns = [
        {
            title: 'Merchandise',
            dataIndex: 'name'
        },
        {
            title: 'Description',
            dataIndex: 'desc'
        },
        {
            title: 'Price',
            dataIndex: 'price',
            render: (price) => '$' + price
        },
        {
            width: 100,
            title: 'Status',
            render: (merchandise) => {
                // console.log(merchandise)
                const { status, _id } = merchandise
                const newStatus = status === 1 ? 2 : 1
                return (
                    <span>
                        <Button type='primary' onClick={() => updateStatus(_id, newStatus)}>{status === 1 ? 'Sold Out' : 'On Sale'}</Button>
                        <span>{status === 1 ? 'On Sale' : 'Sold Out'}</span>
                    </span>
                )
            }
        },
        {
            width: 100,
            title: 'Operate',
            render: (merchandise) => {
                return (
                    <span>
                        <Button type='link' onClick={() => showDetail(merchandise)}>Detail</Button>
                        <Button type='link' onClick={() => showUpdate(merchandise)}>Edit</Button>
                    </span>
                )
            }
        },
    ]
  const [merchandise, setMerchandise] = useState([])  
  const [total, setTotal] = useState(0)  
  const [pageNum, setPageNum] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
        getMerchandise(1)
  },[])

  const{Option} = Select
  const navigate = useNavigate()
  const title = (
      <span className='card-title' >
          <Select
              defaultValue='merchandiseName'
              style={{width:150}}
          >
              <Option value='merchandiseName'>by Name</Option>
              <Option value='merchandiseDescrip'>by DescriP</Option>
          </Select>
          <Input 
              placeholder='KeyWord'
              style={{width:150, margin: '0 15px'}}
              

          />
          <Button type='primary' 
                onClick={() => getMerchandise(1)}
          >
              Search
          </Button>

      </span>
  
  )
// get merchandise from DataBase
  const getMerchandise = async(pageNum) => {
        setPageNum(pageNum)
        setLoading(true)
        const result = await reqMerchandise({
            pageNum,
            pageSize: PAGE_SIZE
        })

        setLoading(false)
        if (result.status === 0) {
            // console.log(result.data)
            const {total, list} = result.data
            setTotal(total)
            setMerchandise(list)
        } else {
            message.error(result.msg)
        }

        
        

  }
  const handleAddMechandise = () =>{
      navigate('/merchandise/addupdate')
  }
// merchandise detail
  const showDetail = (merchandise) => {
    console.log(merchandise)
    // navigate to merchandise detail and pass the merchandise object to MerchandiseDetail component
    navigate('/merchandise/detail',{state: merchandise})
}
//  edit merchandise
  const showUpdate = (merchandise) => {
        console.log(merchandise)
  }
//  edit status of merchandise 1: on sole 2: sold out
  const updateStatus = (productId, status) => {
        console.log(productId, status)
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
    <Card className='merchandise-home' 
        style={{textAlign:'left'}}  
        title={title} extra={extra}
    >
        <Table 
            bordered
            rowKey='_id'
            loading={loading}
            columns={columns}
            dataSource={merchandise}
            pagination={{
                current: pageNum,
                total,
                defaultPageSize: PAGE_SIZE,
                showQuickJumper: true,
                onChange: getMerchandise
            }}
        />

    </Card> 
  )
}
