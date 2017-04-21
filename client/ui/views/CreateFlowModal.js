import React from 'react'
import { Modal, Button, Form } from 'semantic-ui-react'
import { setPropTypes, withProps, compose, withState, withHandlers, lifecycle } from 'recompose'
import { assoc } from 'lodash/fp'
import PropTypes from 'prop-types'
import Alert from 'react-s-alert'

import { Flows as FlowsMethods } from '/both/methods'

export default compose(
  setPropTypes({
    trigger: PropTypes.element,
    open: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
  }),
  withProps({
    emptyFlow: {name: '', description: ''}
  }),
  withState('flow', 'setFlow', ({emptyFlow}) => emptyFlow),
  withHandlers({
    onNameChange: ({setFlow}) => (e) => setFlow(assoc('name', e.target.value)),
    onDescriptionChange: ({setFlow}) => (e) => setFlow(assoc('description', e.target.value))
  }),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      if (this.props.open !== nextProps.open) {
        this.props.setFlow(this.props.emptyFlow)
      }
    }
  }),
  withState('submitting', 'setSubmitting', false),
  withHandlers({
    onCreateFlow: ({flow, setSubmitting, onClose}) => () => {
      setSubmitting(true)
      FlowsMethods.createFlow.call(flow, (err) => {
        setSubmitting(false)
        if (err) {
          console.error(err)
          Alert.error('流程创建失败')
        } else {
          Alert.success('流程创建成功')
          onClose()
        }
      })
    }
  }),
  withHandlers({
    onSubmit: ({onCreateFlow}) => e => {
      e.preventDefault()
      onCreateFlow()
    }
  })
)(({trigger, open, onOpen, onClose, flow, onNameChange, onDescriptionChange, onSubmit, onCreateFlow, submitting}) => (
  <Modal size="small" open={open} trigger={trigger} onOpen={onOpen} onClose={onClose}>
    <Modal.Header content='创建流程'/>
    <Modal.Content>
      <Form loading={submitting} onSubmit={onSubmit}>
        <Form.Input label="流程名称" value={flow.name} onChange={onNameChange}/>
        <Form.TextArea autoHeight label="流程描述" value={flow.description} onChange={onDescriptionChange}/>
      </Form>
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={onClose}>返回</Button>
      <Button primary onClick={onCreateFlow}>创建</Button>
    </Modal.Actions>
  </Modal>
))