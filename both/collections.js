import { Mongo } from 'meteor/mongo'

export const Projects = new Mongo.Collection('Projects')
Projects.attachSchema(new SimpleSchema({
  name: {
    type: String
  },

  // manager userId
  manager: {
    type: String
  }
}))
