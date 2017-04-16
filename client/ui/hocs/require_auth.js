import React from 'react'
import { Redirect } from 'react-router-dom'
import { createContainer } from 'meteor/react-meteor-data'
import { Meteor } from 'meteor/meteor'

const requireAuth = (Component) => {
  return createContainer(() => ({
      userId: Meteor.userId(),
      loggingIn: Meteor.loggingIn(),
    }), ({userId, loggingIn, ...otherProps}) => {
      if (loggingIn) {
        return <div>登录中，请稍后……</div>
      } else if (userId) {
        return <Component {...otherProps}/>
      } else {
        return <Redirect to="/signin"/>
      }
    }
  )
}

export default requireAuth