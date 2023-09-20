import React,{ useState } from "react";
import "./style.css"

export default function DetailDiv({className = "", id, descriptionComponent, defaultState = 'Detail', children}){

  const [mode, setMode] = useState(defaultState)
	const previewClassName = "Preview " + ' PseudoAltFont ' + (!children ? 'Empty' : '')
  
  return <div className={"DetailDiv " + className}>
    <div id={id} className={"Container " + mode} >
      <div className={previewClassName} onClick={()=>{
          setMode('Detail')
        }}>
        {mode === 'Detail' ? React.cloneElement(children, {className:'Detail', detail:true}) : children}
      </div>

      <div className="Description">
        {descriptionComponent}
      </div>
    </div>
  </div>
}