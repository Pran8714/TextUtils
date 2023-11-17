import React from 'react'

export default function Alert(props) {

  
  return (
    <div>
      <div className={`alert alert-${props.alert.type}`} role="alert">
  <strong>{props.alert.type}</strong>&nbsp;{ props.alert.msg}
</div>
    </div>
  )
} 

