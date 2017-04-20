import React from 'react'
import { Button } from 'semantic-ui-react'
import { compose, withHandlers, withState } from 'recompose'

import MainLayout from '../layouts/MainLayout'
import SideNavLayout from '../layouts/SideNavLayout'
import CreateProjectModal from '../views/CreateProjectModal'
import MyProjects from '../views/MyProjects'

export default () => (
  <MainLayout>
    <SideNavLayout>
      <div style={{width: '100%', height: '100%', padding: '1em'}}>
        <div style={{marginBottom: '1em'}}>
          <CreateProjectButton/>
        </div>
        <MyProjects/>
      </div>
    </SideNavLayout>
  </MainLayout>
)

const CreateProjectButton = compose(
  withState('modalVisible', 'setModalVisible', false),
  withHandlers({
    openModal: ({setModalVisible}) => () => setModalVisible(true),
    closeModal: ({setModalVisible}) => () => setModalVisible(false)
  })
)(({modalVisible, openModal, closeModal}) => (
  <CreateProjectModal trigger={<Button primary>创建项目</Button>} open={modalVisible} onOpen={openModal}
                      onClose={closeModal}/>
))
