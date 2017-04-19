import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { Projects } from '../collections'

export default {
  createProject: new ValidatedMethod({
    name: 'Projects.createProject',
    validate: null,
    run({name, description}) {
      if (!this.userId) {
        throw new Meteor.Error('Projects.createProject.not-logged-in')
      }

      return Projects.insert({
        name,
        description,
        owner: this.userId,
      })
    }
  })
}
