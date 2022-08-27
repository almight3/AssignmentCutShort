import React,{useState} from 'react'
import "./Form.css"
import Individual from "../asset/person.png"
import Team from "../asset/group.png"
import IndividualPurple from "../asset/person-purple.png"
import TeamPurple from "../asset/group-purple.png"

function SelectType({formData,setFormData}) {
  const [person,setPerson] = useState(true)
  const [group,setGroup] = useState(false)


  return (
    <div>
      <h2>How are you planning to use Eden ?</h2>
      <p>well streamline your setup experince accordingly.</p>
      <div className="select-type-container "> 
         <div className={person==true?"select-container image-active": "select-container image-deactive"} onClick={()=>{
          setGroup(false)
          setPerson(true)
          setFormData({...formData,ForMySelf:true,withMyTeam:false})
         }} >
          <img src={ person === true ? IndividualPurple :Individual } style={{width:"22px",margin:"0.5rem"}}/>
          <h5>For Myself</h5>
          <p>
            Write better. Think more clearly. Stay organized.
          </p> 
          </div>
         <div className={group==true?"select-container image-active": "select-container image-deactive"} onClick={()=>{
          setGroup(true)
          setPerson(false)
          setFormData({...formData,ForMySelf:false,withMyTeam:true})
         }}>
            <img src={group === true ?TeamPurple:Team}  style={{width:"24px",margin:"0.5rem"}} />
            <h5>With my team</h5>
            <p>
            wikis,docs,tasks & projects, all in one place.
            </p> 
         </div>
      </div>
    </div>
  )
}

export default SelectType