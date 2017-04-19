import React from 'react'

import SideNav from '../views/SideNav'

const SideNavLayout = ({children}) => (
  <Layout left={<SideNav/>} main={children}/>
)

export default SideNavLayout

const Layout = ({left, main}) => (
  <div style={{display: 'flex', height: '100%', width: '100%'}}>
    <div style={{width: '300px', height: '100%'}}>{left}</div>
    <div style={{width: '100%', height: '100%'}}>{main}</div>
  </div>
)