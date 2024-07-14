import React, {useState, useEffect} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { Card,Button, List} from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons';

import { BASE_IMG_URL } from '../../utils/constants';
import { reqCategoryName } from '../../api';



export default function MerchandiseDetail(props) {
  const { Item } = List
  const navigate = useNavigate()
  // state from merchandise page
  const location = useLocation()
  const {name, desc, price,imgs,categoryId,pCategoryId} = location.state
  const [category, SetCategory] = useState({})
   useEffect(() => {

    async function fetchData() {
            
            if (pCategoryId === '0') {
              const result = await reqCategoryName(categoryId)
              const cName1 = result.data
              SetCategory({cName1})
            } else {
              
              const results = await Promise.all([
                  reqCategoryName(pCategoryId),
                  reqCategoryName(categoryId),
              ])
             
              const cName1 = results[0].data
              const cName2 = results[1].data 
              SetCategory({cName1, cName2})
              // console.log(cName1,cName2)
              
            }
    }
          fetchData()
         



  },[])
//  back merchandise homepage
  const backHome = () => {
    console.log(category)
    navigate('/merchandise')
    // console.log(location)

    
  }
  const title = (
    <span>
        <Button type='link'  onClick={backHome}      >
          
             <ArrowLeftOutlined />
              {/* style={{marginRight: 10, fontSize: 20}} */}
              
        </Button>
    <span>Merchandise Detail</span>
    </span>
)


  return (
    <Card title={title} 
        style={{textAlign:'left'}}
    >
        <list>
            <Item className='list-item'>
                <span className='left'>Name:</span>
                <span>{name}</span>
            </Item>
            <Item className='list-item'>
                <span className="left">Description:</span>
                <span>{desc}</span>
            </Item>
            <Item className='list-item'>
                <span className="left">Price:</span>
                <span>{price}$</span>         
            </Item>
            <Item className='list-item'>
                        <span className="left">Category:</span>
                        <span>{category.cName1} {category.cName2 ? ' --> '+category.cName2 : ''}</span>
                    </Item>

            <Item className='list-item'>
                <span className="left">Picture:</span>
                <span>
                    {
                        imgs.map(img => {
                          return(
                          <img 
                              key={img}
                              src= {BASE_IMG_URL + img}
                              className='merchan-img'
                              alt='img'
                          />)
                        })
                    }
                </span>
            </Item>

        </list>

    </Card>
  )
}
