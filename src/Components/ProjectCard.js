import { useState } from "react";
import {getEpochDate} from "../Util/EpochTime"
import './Styles/ProjectCard.css'

export default function ProjectCard({title, periods, mini = false, className = "", ...restProps}){
    
    const projectTime = getEpochDate(periods[0][0]) + '-' + getEpochDate(periods[0][1]);
    
    return <section 
        className={
            "ProjectCard " 
            + (mini ? "Mini " : "")
            + className} 
        {...restProps}
    >

            {periods.map(([start,end],i)=>{
                const st = {"--data-start":-end, "--data-end":-start}
                return <>
                    <div key={`${i}_${start}_${end}`} className="TimeSpan" style={st} >
                    </div>
                </>
            })}
            
            <div className="ProjectData">
                <h1 data-time={projectTime}>{title}</h1>
                <div className="Content">
        {/* <a href={"#"+title}> */}
                <p className="Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <p>Motivation: work</p>
                </div>
        {/* </a> */}
            </div>
    </section>
}