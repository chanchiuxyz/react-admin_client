import React from 'react'

import { Button, Card } from 'antd'
import ReactEcharts from 'echarts-for-react'

import './charts.css'

const option = {
  title: {
    text: 'Proportion of categories sold',
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Electronics' },
        { value: 735, name: 'Fashion' },
        { value: 580, name: 'Books' },
        { value: 484, name: 'Toys' },
        { value: 300, name: 'Home' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
export default function Pie() {
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
