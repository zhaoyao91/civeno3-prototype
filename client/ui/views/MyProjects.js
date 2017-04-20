import React from 'react'
import { Card } from 'semantic-ui-react'
import { flatten } from 'lodash/fp'
import { compose } from 'recompose'
import { Projects } from '/both/collections'
import { Meteor } from 'meteor/meteor'
import { Link } from 'react-router-dom'

import withMeteorData from '../hocs/with_meteor_data'

export default compose(
  withMeteorData(({props}) => {
    const userId = Meteor.userId()
    return {
      projects: Projects.find({owner: userId}).fetch()
    }
  })
)(({projects}) => (
  <ProjectListLayout>
    {
      projects.map(project => (
        <ProjectCard key={project._id} project={project}/>
      ))
    }
  </ProjectListLayout>
))

const ProjectCard = ({project}) => (
  <Card as={Link} to={`/project/${project._id}`} style={{width: '200px'}}>
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