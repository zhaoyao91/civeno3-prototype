import React from 'react'

import Navbar from '../views/Navbar'
import FixedTopLayout from '../layouts/FixedTopLayout'
import MyProjectList from '../views/MyProjectList'

const IndexPage = () => (
  <FixedTopLayout
    top={<Navbar/>}
    main={<Main/>}
  />
)

const Main = () => (
  <div>
    <MyProjectList/>
  </div>
)

export default IndexPage