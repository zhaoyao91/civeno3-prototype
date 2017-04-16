import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { Projects } from './collections'

const projectsMethods = {
  createProject: new ValidatedMethod({
    name: 'Projects.createProject',
    validate: null,
    run({name}) {
      if (!this.userId) {
        throw new Meteor.Error('Projects.createProject.not-logged-in')
      }

      return Projects.insert({
        name,
        manager: this.userId,
      })
    }
  })
}

export {
  projectsMethods as Projects
}