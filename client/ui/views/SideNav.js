import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'
import { compose, withProps } from 'recompose'

export default compose(
  withRouter,
  withProps(({match}) => ({path: match.path}))
)(({path}) => (
  <Menu fluid vertical tabular style={{height: '100%'}}>
    <Menu.Item as={Link} to="/workspace" active={path === '/workspace'}>工作台</Menu.Item>
    <Menu.Item as={Link} to="/projects" active={path === '/projects'}>项目</Menu.Item>
  </Menu>
))