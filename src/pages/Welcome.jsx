import React from 'react'
import {  Redirect} from 'react-router-dom/cjs/react-router-dom'

export default function Welcome() {

  return (
    <div>
<Redirect to = {'/login'}/>       
    
    </div>
  )
}
