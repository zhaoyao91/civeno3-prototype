import React from 'react'
import { Modal, Button, Form } from 'semantic-ui-react'

export default ({trigger, open, onOpen, onClose}) => (
  <Modal size="small" open={open} trigger={trigger} onOpen={onOpen} onClose={onClose}>
    <Modal.Header content='创建项目'/>
    <Modal.Content>
      <Form>
        <Form.Input label="项目名称"/>
        <Form.TextArea autoHeight label="项目描述"/>
      </Form>
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={onClose}>返回</Button>
      <Button primary>创建</Button>
    </Modal.Actions>
  </Modal>
)
