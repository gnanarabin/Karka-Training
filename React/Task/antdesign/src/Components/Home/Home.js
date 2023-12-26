import React from 'react'
import AppHeader from '../AppHeader/AppHeader'
import SideMenu from '../SideMenu/SideMenu'
import PageContent from '../PageContent/PageContent'
import AppFooter from '../AppFooter/AppFooter'
import { Space } from 'antd'
import '../style/style.css'

const Home = () => {
  return (
    <div className='container-fluid d-flex flex-column'>
        <AppHeader/>
        <Space>
            <SideMenu/>
            <PageContent/>
        </Space>
        <AppFooter/>

    </div>
  )
}

export default Home