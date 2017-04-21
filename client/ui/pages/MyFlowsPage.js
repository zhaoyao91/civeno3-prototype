import React from 'react'
import { Button } from 'semantic-ui-react'
import { compose, withState, withHandlers } from 'recompose'

import MainLayout from '../layouts/MainLayout'
import SideNavLayout from '../layouts/SideNavLayout'
import CreateFlowModal from '../views/CreateFlowModal'

export default () => (
  <MainLayout>
    <SideNavLayout>
      <div style={{padding: '1em'}}>
        <CreateFlowButton/>
      </div>
    </SideNavLayout>
  </MainLayout>
)

const CreateFlowButton = compose(
  withState('modalVisible', 'setModalVisible', false),
  withHandlers({
    openModal: ({setModalVisible}) => () => setModalVisible(true),
    closeModal: ({setModalVisible}) => () => setModalVisible(false),
  })
)(({modalVisible, openModal, closeModal}) => (
  <CreateFlowModal trigger={<Button primary>创建流程</Button>} open={modalVisible} onOpen={openModal}
                   onClose={closeModal}/>
))