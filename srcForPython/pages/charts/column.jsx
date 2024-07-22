import React from 'react'

import { Button, Card } from 'antd'
import ReactEcharts from 'echarts-for-react'

import './charts.css'

const option = {
  title: {
    text: 'ECharts instance'
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
    {       emphasis: {
      focus: 'series'
    },
      name: 'sold',
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    },
    {
      emphasis: {
        focus: 'series'
      },
      name: 'storage',
      data: [20, 20, 50, 20, 30, 10, 30],
      type: 'bar'
    }
  ]
};
export default function Column() {
  return (
    <div className='chart-form'>
        <Card style={{textAlign:'left'}}>
            <Button type='primary'>Update</Button>
        </Card>
        <Card title='Echart I'>
              <ReactEcharts option={option}/>

        </Card>
    </div>
  )
}
