import React from 'react'
import "./Form.css"
function NameDetails({formData,setFormData,formError}) {
  return (
    <div className="name-container">
      <h2>Welcome! First Things first....</h2>
      <p>You can change them later.</p>
      <label htmlFor="full-name">Full Name</label>
      <input type="text" placeholder="Steve Jobs" 
      onChange={(e)=>setFormData({...formData,FullName:e.target.value})}/>
      <label htmlFor="display-name">Display Name</label>
      <input type="text" placeholder="Steve" 
      onChange={(e)=>setFormData({...formData,DisplayName:e.target.value})} />
       {formError && <p style={{color:'red',margin:"0.3rem",textAlign:"center"}}>{formError}</p>}
    </div>
  )
}

export default NameDetails