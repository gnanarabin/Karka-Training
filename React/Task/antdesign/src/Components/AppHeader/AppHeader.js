import { BellOutlined, MailOutlined } from '@ant-design/icons'
import { Image, Space, Typography } from 'antd'
import React from 'react'

const AppHeader = () => {
  return (
    <div className='app-header d-flex '>
        <Image height={"100%"} src='https://i.pinimg.com/1200x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg'></Image>
        <Typography.Title className='head-title'>Welcome</Typography.Title>
        <Space className='head-icon'>
            <MailOutlined className='MailOutlined'/>
            <BellOutlined />
        </Space>
    </div>
  )
}

export default AppHeader