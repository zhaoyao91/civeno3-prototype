import React from 'react'
import { Button, Container, Form, Message } from 'semantic-ui-react'
import { compose, withHandlers, withState } from 'recompose'
import { Accounts } from 'meteor/accounts-base'
import { Link, withRouter } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'

const SignupPage = () => (
  <MainLayout>
    <Container style={{marginTop: '1em'}}>
      <h1>注册</h1>
      <SignupForm/>
    </Container>
  </MainLayout>
)

export default SignupPage

const SignupForm = compose(
  withState('email', 'setEmail', ''),
  withState('password', 'setPassword', ''),
  withState('message', 'setMessage', null),
  withState('loading', 'setLoading', false),
  withRouter,
  withHandlers({
    onEmailChange: ({setEmail}) => (e) => setEmail(e.target.value),
    onPasswordChange: ({setPassword}) => (e) => setPassword(e.target.value),
    onSubmit: ({email, password, setMessage, setLoading, history}) => (e) => {
      e.preventDefault()
      setMessage(null)
      setLoading(true)
      Accounts.createUser({email, password}, (err) => {
        setLoading(false)
        if (err) {
          console.error(err)
          setMessage({type: 'error', content: '注册失败'})
        } else {
          console.log('succeed to create user')
          setMessage({type: 'success', content: '注册成功'})
          history.push('/')
        }
      })
    }
  })
)(({email, onEmailChange, password, onPasswordChange, onSubmit, message, loading}) => (
  <Form onSubmit={onSubmit} loading={loading}>
    {!!message && <FormMessage {...message}/>}
    <Form.Input label='邮箱' type='email' value={email} onChange={onEmailChange}/>
    <Form.Input label='密码' type='password' onChange={onPasswordChange}/>
    <Button type="submit" primary style={{marginRight: '1em'}}>注册</Button>
    <Link to="/signin">已有账号？去登录</Link>
  </Form>
))

const FormMessage = ({content, type}) => (
  <Message
    visible={true}
    content={content}
    success={type === 'success'}
    error={type === 'error'}
  />
)