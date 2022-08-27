import React from 'react'
import Check from "../asset/vectorpaint.svg"
import "./Form.css"
function Launch() {
  return (
    <div className="name-container">
       <img src={Check} style={{margin:"3rem auto",backgroundColor:"white",width:"60px"}}/>
      <h2>Contratulation, Eren</h2>
      <p style={{fonntWeight:"400"}}>you have completed onboarding, you can start using Eden!.</p>
    </div>
  )
}

export default Launch