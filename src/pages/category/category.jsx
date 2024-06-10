import React from 'react'

import { Button, Card, Space, Table } from 'antd';
import {PlusOutlined} from '@ant-design/icons';

import './category.css'

// Merchandise Category route


export default function Category() {

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
  ];

  const title = 'Category I'
  const extra = (
    <Button type='primary'>
        <PlusOutlined />
        Add
    </Button>
  )
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
            <Table dataSource={dataSource} columns={columns} />;
        </Card>
      </Space>
  </div>
  )
}
