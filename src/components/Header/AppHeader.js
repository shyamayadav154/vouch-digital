import React from 'react'

import './AppHeader.styles.scss'
import { Button, Space } from 'antd'

const AppHeader = () => {
  return (
    <div className='container-fluid'>
      <div className='app-header'>
        <div className='logo'><h1 className='brand'>ATools.</h1></div>
        <div>
      
            <Space>
              <Button type='primary' size='large' id='navyBlue'>
                Start Free Trial
              </Button>
              <Button type='primary' size='large' id='orange'>
                Login
              </Button>
            </Space>
      
        </div>
      </div>
    </div>
  )
}

export default AppHeader
