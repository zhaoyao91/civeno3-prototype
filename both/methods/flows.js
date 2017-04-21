import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { Flows } from '../collections'

export default {
  createFlow: new ValidatedMethod({
    name: 'Flows.createFlow',
    validate: null,
    run({name, description}) {
      if (!this.userId) {
        throw new Meteor.Error('Flows.createFlow.not-logged-in')
      }

      return Flows.insert({
        name,
        description,
        owner: this.userId,
      })
    }
  })
}
