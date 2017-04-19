import React from 'react'
import { Container, Dropdown, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { createContainer } from 'meteor/react-meteor-data'
import { Meteor } from 'meteor/meteor'
import { prop } from 'lodash/fp'
import { compose, withHandlers } from 'recompose'

export default () => (
  <Menu borderless>
    <Container>
      <Menu.Item as={Link} to="/">
        主页
      </Menu.Item>
      <Menu.Menu position="right">
        <UserItem/>
      </Menu.Menu>
    </Container>
  </Menu>
)

const UserItem = createContainer(() => ({
  user: Meteor.user()
}), ({user}) => {
  if (!user) {
    return <UnsignedInUserItem/>
  } else {
    return <SignedInUserItem user={user}/>
  }
})

const UnsignedInUserItem = () => (
  <Menu.Item as={Link} to="/signin">
    登录/注册
  </Menu.Item>
)

const SignedInUserItem = compose(
  withHandlers({
    onClickLogout: (props) => () => Meteor.logout()
  })
)(({user, onClickLogout}) => (
  <Dropdown item text={prop('emails.0.address', user)}>
    <Dropdown.Menu>
      <Dropdown.Item onClick={onClickLogout}>
        <span style={{color: 'red'}}>退出登录</span>
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
))