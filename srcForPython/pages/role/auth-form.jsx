import React, {useState, useEffect} from 'react'

import { Form, Input, Tree} from 'antd'

import menuList from '../../config/menuConfig'
const {Item} = Form
const { TreeNode } = Tree

export default function AuthForm(props) {
    console.log('props',props)
    const {role} = props
    const [checkedKeys, setCheckedKeys] = useState([]) 
    const [treeNodes, setTreeNodes] = useState([])
    // will run when reselect the role from father component
    useEffect(() => {
        console.log('useEffect')
        const result = getTreeNodes(menuList)
        setTreeNodes(result)
        const {menus} = props.role
        setCheckedKeys(menus)

        
    },[props.role])
    // Item layout
    const formItemLayout = {
        labelCol: { span: 4 },  // lable width
        dataCol: { span: 15 }, // right content width
    }
    //  get tree nodes
    const getTreeNodes = (menuList) => {
        return menuList.reduce((pre, item) => {
            pre.push(
                <TreeNode 
                    title = {item.label}
                    key={item.key}
                >
                    {item.children ? getTreeNodes(item.children):null}
                </TreeNode>
            )
            return pre
        },[])
    }
    // selected call back
    const  onCheck = (checkedKeys) => {
       
        console.log('onCheck', checkedKeys)
        setCheckedKeys(checkedKeys)
        props.setAuth(checkedKeys)

    }
    // for father component get latest selected menus
    
  return (
    <Form {...formItemLayout}>
        <Item label='Role Name:'>
            <Input placeholder='role name'
                value={role.name} disabled 
            />
        </Item>
        <Tree checkable
            defaultExpandAll={true}
            checkedKeys={checkedKeys}
            onCheck={onCheck}
        >
            <TreeNode title='authority' key='all'>
                {treeNodes}
            </TreeNode>

        </Tree>

    </Form>
  )
}
