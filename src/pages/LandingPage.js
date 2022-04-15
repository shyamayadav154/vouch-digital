import React from 'react'

import { Layout } from 'antd'

import AppHeader from '../components/Header/AppHeader'
import './landingPage.styles.scss'
import Hero from '../components/Hero/Hero'


const { Header, Content } = Layout

const Login = () => {
  return (
    <Layout>
    
      <Header theme='light'>
        <AppHeader />
      </Header>
      <Content  >
        <Hero/>
      </Content>
    </Layout>
  )
}

export default Login
