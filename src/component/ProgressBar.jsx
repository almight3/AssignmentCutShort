import React,{useState,useEffect} from 'react'
import "./Progressbar.css"
  function ProgressBar({step}) {
    const [progress,setProgress] =  useState(20)
    useEffect(()=>{
     if(step==2){
      setProgress(50)
     }
     else if(step==3){
      setProgress(80)
     }
     else if(step==4){
      setProgress(100)
     }
    },[step])

  return (

<div className="progressbar">
    <div className="progress" style={{width:`${progress}%`}}></div>
   <div className="progress-steps progress-step-active">1</div>
   <div className={step>=2?"progress-steps progress-step-active":"progress-steps"}>2</div>
   <div className={step>=3?"progress-steps progress-step-active":"progress-steps"}>3</div>
   <div className={step==4?"progress-steps progress-step-active":"progress-steps"}>4</div>
</div>
  )
}

export default ProgressBar