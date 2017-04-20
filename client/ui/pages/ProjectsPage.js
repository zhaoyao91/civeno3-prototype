import React from 'react'
import { Button, Card, Icon } from 'semantic-ui-react'
import { flatten } from 'lodash/fp'
import { compose, withHandlers, withState } from 'recompose'

import MainLayout from '../layouts/MainLayout'
import SideNavLayout from '../layouts/SideNavLayout'
import CreateProjectModal from '../views/CreateProjectModal'

const fakeProjects = [
  {name: '打到帝国主义!'},
  {name: '中华人民共和国万岁'},
  {name: '打到帝国主义打到帝国主义'},
  {name: '中华人民共和国万岁中华人民共和国万岁'},
  {name: '打到帝国主义打到帝国主义打到帝国主义'},
  {name: '吃葡萄不吐葡萄皮吃葡萄不吐葡萄皮吃葡萄不吐葡萄皮吃葡萄不吐葡萄皮吃葡萄不吐葡萄皮吃葡萄不吐葡萄皮'},
]

export default () => (
  <MainLayout>
    <SideNavLayout>
      <div style={{width: '100%', height: '100%', padding: '1em'}}>
        <div style={{marginBottom: '1em'}}>
          <CreateProjectButton/>
        </div>
        <ProjectListLayout>
          {
            fakeProjects.map(project => <ProjectCard key={project.name} project={project}/>)
          }
        </ProjectListLayout>
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

const ProjectCard = ({project}) => (
  <Card style={{width: '200px'}}>
    <Card.Content>
      <Card.Header style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
        {project.name}
      </Card.Header>
    </Card.Content>
  </Card>
)

const ProjectListLayout = ({children}) => (
  <div>
    {
      flatten(children).map((item, index) => (
        <div key={index}
             style={{float: 'left', marginRight: '1em', marginBottom: '1em'}}>
          {item}
        </div>
      ))
    }
  </div>
)