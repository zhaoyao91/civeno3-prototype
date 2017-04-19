import React from 'react'
import { Modal, Button } from 'semantic-ui-react'

const CreateProjectModal = ({trigger, open, onOpen, onClose}) => (
  <Modal open={open} trigger={trigger} onOpen={onOpen} onClose={onClose}>
    <Modal.Header content='创建项目'/>
    <Modal.Content>
      <p>Create Project ... </p>
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={onClose}>返回</Button>
      <Button primary>创建</Button>
    </Modal.Actions>
  </Modal>
)

export default CreateProjectModal