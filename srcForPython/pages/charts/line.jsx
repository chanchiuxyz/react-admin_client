import React from 'react'

import { Button, Card } from 'antd'
import ReactEcharts from 'echarts-for-react'

import './charts.css'

const option = {
  title: {
      text: 'Echarts Line'
  },
  legend: {
    data:['sold', 'storage']
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    { 
      emphasis: {
        focus: 'series'
      },
      name: 'sold',
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    },
    { name: 'storage',
      data: [20, 20, 50, 20, 30, 10, 30],
      type: 'line'
    }
  ]
};
export default function Line() {
  // console.log(option1)
  return (
    <div className='chart-form'>
        <Card style={{textAlign:'left'}}>
            <Button type='primary'>Update</Button>
        </Card>
        <Card title='Echart II'>
              <ReactEcharts option={option}/>

        </Card>
    </div>
  )
}
