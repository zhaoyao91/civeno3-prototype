import React from 'react'
import { Modal, Button, Form } from 'semantic-ui-react'
import { setPropTypes, withProps, compose, withState, withHandlers, lifecycle } from 'recompose'
import { assoc } from 'lodash/fp'
import PropTypes from 'prop-types'
import Alert from 'react-s-alert'

import { Projects as ProjectsMethods } from '/both/methods'

export default compose(
  setPropTypes({
    trigger: PropTypes.element,
    open: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
  }),
  withProps({
    emptyProject: {name: '', description: ''}
  }),
  withState('project', 'setProject', ({emptyProject}) => emptyProject),
  withHandlers({
    onNameChange: ({setProject}) => (e) => setProject(assoc('name', e.target.value)),
    onDescriptionChange: ({setProject}) => (e) => setProject(assoc('description', e.target.value))
  }),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      if (this.props.open !== nextProps.open) {
        this.props.setProject(this.props.emptyProject)
      }
    }
  }),
  withState('submitting', 'setSubmitting', false),
  withHandlers({
    onCreateProject: ({project, setSubmitting, onClose}) => () => {
      setSubmitting(true)
      ProjectsMethods.createProject.call(project, (err) => {
        setSubmitting(false)
        if (err) {
          console.error(err)
          Alert.error('项目创建失败')
        } else {
          Alert.success('项目创建成功')
          onClose()
        }
      })
    }
  }),
  withHandlers({
    onSubmit: ({onCreateProject}) => e => {
      e.preventDefault()
      onCreateProject()
    }
  })
)(({trigger, open, onOpen, onClose, project, onNameChange, onDescriptionChange, onSubmit, onCreateProject, submitting}) => (
  <Modal size="small" open={open} trigger={trigger} onOpen={onOpen} onClose={onClose}>
    <Modal.Header content='创建项目'/>
    <Modal.Content>
      <Form loading={submitting} onSubmit={onSubmit}>
        <Form.Input label="项目名称" value={project.name} onChange={onNameChange}/>
        <Form.TextArea autoHeight label="项目描述" value={project.description} onChange={onDescriptionChange}/>
      </Form>
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={onClose}>返回</Button>
      <Button primary onClick={onCreateProject}>创建</Button>
    </Modal.Actions>
  </Modal>
))