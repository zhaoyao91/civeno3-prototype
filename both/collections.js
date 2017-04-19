import { Mongo } from 'meteor/mongo'

export const Projects = new Mongo.Collection('Projects')
Projects.attachSchema(new SimpleSchema({
  name: {
    type: String
  },

  description: {
    type: String
  },

  // userId
  owner: {
    type: String
  },

  // userId
  managers: {
    type: [String]
  }
}))
