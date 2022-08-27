import React from 'react'

function WorkSpaceName({formData,setFormData,formError}) {
  return (
    <div className="name-container">
      <h2>Lets set up a home for your work</h2>
      <p>You can always create another workspace later.</p>
      <label htmlFor="full-name">Workspace Name</label>
      <input type="text" placeholder="Eden"  onChange={(e)=>setFormData({...formData,WorkSpaceName:e.target.value})}/>
      <label htmlFor="display-name">Workspace URL</label>
      <input type="text" placeholder="Example" onChange={(e)=>setFormData({...formData,WorkSpaceURL:e.target.value})}/>
      {formError && <p style={{color:'red',margin:"0.3rem",textAlign:"center"}}>{formError}</p>}
    </div>
  )
}

export default WorkSpaceName