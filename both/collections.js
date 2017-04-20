import { Mongo } from 'meteor/mongo'
import { compose, has, mapValues, isObjectLike, isArray, map, defaults, cond, T, identity } from 'lodash/fp'

export const Projects = new Mongo.Collection('Projects')
Projects.attachSchema(new SimpleSchema(defaultOptional({
  name: {
    type: String,
  },

  description: {
    type: String,
  },

  // userId
  owner: {
    type: String,
  },

  // userId
  managers: {
    type: [String],
  }
})))

// make all fields of target optional by default
function defaultOptional (target) {
  if (isObjectLike(target)) {
    if (isArray(target)) {
      return map(defaultOptional)(target)
    } else {
      return compose(
        cond([
          [has('type'), defaults({optional: true})],
          [T, identity]
        ]),
        mapValues(defaultOptional),
      )(target)
    }
  } else {
    return target
  }
}