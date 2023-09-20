import './style.css'
import './style.mobile.css'

import { useEffect, useRef, useState } from "react";
import {Logo} from '../../Components/Logo'
import useDelay from "../../Util/DelayedState";
import DetailDiv from "../../Components/DetailDiv";
import TestDiv from "../../Components/TestDiv";
import AlbumCard from "../../Components/AlbumCard";

import projectSneel from "../../Contents/Projects/sneel"
import projectMinim from "../../Contents/Projects/minim"
import ProjectCard from "../../Components/ProjectCard";

import workTitleContent from "../../Contents/Projects/title"
import SoftwareCard from "../../Components/SoftwareCard";

import sneelImage from '../../Media/Sneel/face.png'

export default function Work() {

  const [viewMode, setViewMode] = useState('timeline');

  return (
    <div className="Work Page Box">
      <header className="Title" id="title">
        <a href="/" className="Home">
          <Logo type="full" />
          <Logo />
        </a>

        <hr/>
        
        {workTitleContent}

        <div className={"Viewmode " + viewMode}>
          <button onClick={()=>{setViewMode('gallery')}} className={viewMode === 'gallery' ? "Selected" : ''}>Gallery</button>
          <button onClick={()=>{setViewMode('timeline')}} className={viewMode === 'timeline' ? "Selected" : ''}>Timeline</button>
        </div>

        <hr/>
      
      </header>

      <SoftwareCard title={'Sneel'}>
        <img src={sneelImage}/>
      </SoftwareCard>

      <section className="Projects" >
        <div className="ProjectsOverflowContainer ">
          {viewMode === 'timeline'? 
          <div className="TimelineContainer">
            <div className="TimePeriods">
              <h1 className="Period Card Box" style={{"--offset":0}}>{"'23"}</h1>
              <h1 className="Period Card Box" style={{"--offset":-8}}>{"'22"}</h1>
              <h1 className="Period Card Box" style={{"--offset":-20}}>{"'21"}</h1>
              <h1 className="Period Card Box" style={{"--offset":-32}}>{"'20 & The Past"}</h1>
            </div>
            <div className="Timeline" >
              {[...Array(56)].map((a,i) => {
                  return <div key={`step_${i}`}className="TimeStep">{"."}</div>
              })}
            </div>
          </div>
          : null
          }
          
          <div className={"EntryContainer"}>
            <div className={"Entries " + viewMode}>
              <ProjectCard periods={[[-1,0]]}    title={"motiv.pw"} />
              <ProjectCard periods={[[-8,0]]}    title={"MINIM"} />
              <ProjectCard periods={[[-5,0]]}    title={"JSON-Audio"} />
              <ProjectCard periods={[[-22,-19]]} title={"MelonJuice.ml"} />
              <ProjectCard periods={[[-6,-3]]}   title={"Sneel"} />
              <ProjectCard periods={[[-16,-6]]}  title={"Num-Calcium"} />
              <ProjectCard periods={[[-16,-12]]} title={"lib-int-DSP"} />
              <ProjectCard periods={[[-17,-8]]}  title={"DSP"} />
              <ProjectCard periods={[[-16,-15]]} title={"Dillustart"} />
              <ProjectCard periods={[[-26,-19]]} title={"MINIM (LUA)"} />
              <ProjectCard periods={[[-32,-30]]} title={"Multimedia (Uni Assignment)"} />
              <ProjectCard periods={[[-34,-31]]} title={"MusiMojis (Uni Project)"} />
              <ProjectCard periods={[[-36,-29]]} title={"Felix III (Uni Dissertation)"} />
              <ProjectCard periods={[[-54,-36]]} title={"Felix II (Protorype)"} />
              <ProjectCard periods={[[-51,-49]]} title={"Space-y (Uni Assignment)"} />
            </div>
          </div>
        </div>
      </section>
      <footer className="End">MOTIV - 2023</footer>
    </div>
  );
}