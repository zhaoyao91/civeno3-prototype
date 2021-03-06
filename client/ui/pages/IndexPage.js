import React from 'react'
import { Redirect } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'
import SideNavLayout from '../layouts/SideNavLayout'

export default () => (
  <MainLayout>
    <SideNavLayout>
      <Redirect to="/workspace"/>
    </SideNavLayout>
  </MainLayout>
)
