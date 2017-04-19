import React from 'react'
import { Modal, Button, Header, List, Segment } from 'semantic-ui-react'
import { compose, withState, withHandlers } from 'recompose'

const MyProjectList = ({projects = []}) => (
  <Segment style={{width: '200px'}}>
    <Header size="medium">我的项目</Header>
    <List>
      {
        projects.map(project => (
          <List.Item>
            {project.name}
          </List.Item>
        ))
      }
    </List>
    <List.Item>
      <CreateProjectButton/>
    </List.Item>
  </Segment>
)

const CreateProjectButton = compose(
  withState('modalVisible', 'setModalVisible', false),
  withHandlers({
    openModal: ({setModalVisible}) => () => setModalVisible(true),
    closeModal: ({setModalVisible}) => () => setModalVisible(false),
  }),
)(({modalVisible, openModal, closeModal}) => (
  <Modal open={modalVisible} trigger={<Button primary>创建项目</Button>} onOpen={openModal} onClose={closeModal}>
    <Header content='创建项目'/>
    <Modal.Content>
      <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={closeModal}>返回</Button>
      <Button primary>
        创建
      </Button>
    </Modal.Actions>
  </Modal>
))

export default MyProjectList