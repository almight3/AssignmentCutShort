import React,{useState,useEffect} from 'react'
import Pagination from "./Pagination"
import NameDetails from "./NameDetails"
import WorkSpaceName from "./WorkSpaceName"
import Launch from "./Launch"
import SelectType from './SelectType'
import ProgressBar from './ProgressBar'
import   './Form.css'
import Logo from "../asset/logo.png"
function MultiStepForm() {
  const [page,setPage] = useState(1)
  const [formData,setFormData] = useState({
    FullName:'',
    DisplayName:'',
    WorkSpaceName:'',
    WorkSpaceURL:'',
    ForMyself:'',
    withMyTeam:''
  })
  const [error,setError] = useState('')
  useEffect(()=>{
  const timer = setTimeout(()=>{
   setError("") 
  },2000)

  return ()=> clearTimeout(timer)

  },[error])
  const nextPage = ()=>{
    if(page<4){
        if(page==1 && formData.FullName==""){
          setError("Please enter Full name")
        }
        else if(page==1 && formData.DisplayName==""){
          setError("Please enter Display Name")
        }
        else if(page==2 && formData.WorkSpaceName==""){
          setError("Please enter WorkSpaceName Name")
        }
        else{
          setPage(page + 1)
        }
    }
  }
  const PageDisplay=()=>{
    switch(page){
    case 1:
        return <NameDetails formData={formData} setFormData={setFormData} formError={error}/>;
    case 2: 
        return <WorkSpaceName formData={FormData} setFormData={setFormData} formError={error} />;
    case 3:
        return <SelectType formData={FormData} setFormData={setFormData} />;
    case 4:
        return <Launch />            
    }
  }

  return (
    <div>
    <div className="logo-container">
       <img src={Logo} style={{width:"35px"}}/>
       <h2>Eden</h2>
    </div>
    <div style={{width:"260px",margin:"3rem auto 3rem"}}><ProgressBar step={page} /></div>
    <div className="form-container">
        <div>{PageDisplay()}</div>
       <Pagination nextPage={nextPage} />
    </div>
    </div>
  )
}

export default MultiStepForm