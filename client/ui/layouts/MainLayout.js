import React from 'react'

import Navbar from '../views/Navbar'

const MainLayout = ({children}) => (
  <Layout top={<Navbar/>} main={children}/>
)

export default MainLayout

const Layout = ({top, main}) => (
  <div style={{height: '100vh', display: 'flex', flexDirection: 'column'}}>
    <div>{top}</div>
    <div style={{flexGrow: 1, overflow: 'auto', display: 'flex', alignItems: 'stretch'}}>{main}</div>
  </div>
)