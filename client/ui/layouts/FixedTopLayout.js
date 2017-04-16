import React from 'react'

/**
 * @param top # element fixed in top
 * @param main # element takes all the rest vertical space
 */
const FixedTopLayout = ({top, main}) => (
  <div style={{height: '100vh', display: 'flex', flexDirection: 'column'}}>
    <div style={{flexShrink: 0}}>{top}</div>
    <div style={{flexShrink: 1, flexGrow: 1, overflow: 'auto', display: 'flex', alignItems: 'stretch'}}>{main}</div>
  </div>
)

export default FixedTopLayout