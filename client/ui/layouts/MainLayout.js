import React from 'react'

import Navbar from '../views/Navbar'

const MainLayout = ({children}) => (
  <Layout top={<Navbar/>} main={children}/>
)

export default MainLayout

const Layout = ({top, main}) => (
  <div style={{width: '100%', height: '100vh', display: 'flex', flexDirection: 'column'}}>
    <div>{top}</div>
    <div style={{height: '100%', overflow: 'auto'}}>{main}</div>
  </div>
)