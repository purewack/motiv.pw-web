import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from 'clsx';

import main from '@/Styles/main/main.module.css'
import hero from '@/Styles/main/hero.module.css'
import hello from '@/Styles/main/hello.module.css'
import skills from '@/Styles/main/skills.module.css'
import project from '@/Styles/main/project.module.css'

import layout from '@/Styles/layout.module.css'
import font from '@/Styles/font.module.css'
import animate from '@/Styles/animate.module.css'

import {Logo, LogoBar} from "@/Components/Logo";
import Navbar from "@/Components/Navbar";
import GFXTitle from "@/Components/GFXTitle/GFXTitle";
import AnimatedEnterDiv from "@/Components/AnimatedEnterDiv";
import TripArea from "@/Components/TripArea";
import SectionCV from "./cv";

import catSVG from '@/Public/Media/cat-svgrepo-com.svg'
import numcalciumFace from '@/Public/Media/NumCalcium/face.svg'
import ProjectTags from "@/Components/ProjectTags";

export default function MainPage() {

  // const [option, setOption] = useState('music');

return (<div className={clsx(main.body)}>

  <header id="hero" className={clsx('card', hero.content, layout.listCenter, layout.margin400)}>
    <Logo type="full" unit={'14vw'}/>
    <h2>P H O N I C</h2>
    <h2>W O R K S</h2>
    <Logo />
    <a href="#hello" className={hero.next}><span>︾</span></a>
  </header>
    
  <TripArea>{(
    triggerRef: React.RefObject<HTMLInputElement>, 
    tripped: boolean
  ) => <>
    <header className={clsx(hello.body, main.hello, 'card', tripped && main.trip,layout.gridAbsolute, layout.margin400)}>
      <div className={clsx(hello.bars, hello.heading, font.headings)}>
        <LogoBar className={hello.bar1} text={"H E L L O - T H E R E - "} />
        <LogoBar className={hello.bar2} text={"I - D E S I G N - "} />
        <LogoBar className={hello.bar3} text={"I - A M - D A M I A N - "} />
      </div> 
      <div id="hello" className={clsx(hello.content, layout.listCenter)}>
        <h1 className={clsx(hello.who)}>H E L L <span className={hello.smile}>O</span></h1>
        <h2>I am Damian</h2>
        <br/>
        <h4>A web developer</h4>
        <h4>A musician</h4>
        <h4>An audio engineer</h4>
      </div>
    </header>
    <Navbar className={clsx(main.nav, 'card', tripped && main.trip)}/>
    <span ref={triggerRef}></span>
    </>}
  </TripArea>

  <main className={main.content}>
    <h1 className={font.size800}>Skills</h1>
    <section className={clsx('card', skills.body, layout.gridAbsolute)}>
      <h1 className={clsx(skills.title, font.thin, font.headings, font.size800)}>I<br/>love<br/>to<br/>create</h1>
      
      <TripArea>{(
          triggerRef: React.RefObject<HTMLInputElement>, 
          tripped: boolean
        ) => <>
          <GFXTitle type='swirl' text="skills" className={skills.gfx} shouldStart={tripped}/>
          <span className={skills.trigger} ref={triggerRef}></span>
        </>
      }</TripArea>

    </section>

    <section className={clsx(skills.content, layout.twinCol)}>
      <div className={clsx(skills.info, font.subtext, font.right, font.weight600, font.size800)}>
        <p>I'm <span className={skills.polish}>Polish</span></p> 
        <p>but here's</p> 
        <p>all the </p>
        <p>languages</p> 
        <p>{"I speak :)"}</p>
      </div>
      <ul className={clsx(font.headings, font.weight200, skills.lang)}>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>C</li>
        <li>C++</li>
        <li>Python</li>
        <li>Lua</li>
        <li>Swift</li>
        <li>Java</li>
        <li>JSFX</li>
        <li>English</li>
      </ul>
    </section>
    
    <LanguagesBanner />

    <section className={clsx('',project.content)}>

      <article className={clsx('card', layout.listCenter, project.numcalcium)}>
        <h1>NumCalcium</h1>
        <h2>Calculator in disguise</h2>
        <ProjectTags tags={['hardware', 'c', 'cpp','python']} namespace={project}/>
      </article> 
      <div className={clsx('card', project.numcalciumFooter)}>
        <Image alt='numcalcium' src={numcalciumFace}/>
      </div>

      <article className={clsx('card', layout.listCenter,  project.minim)}>
        <h1 className={font.wideText}>MINIM</h1>
        <h2>Audio Looping Device</h2>
        <ProjectTags tags={['hardware', 'c', 'cpp','lua']} namespace={project}/>
      </article> 

      <article className={clsx('card', layout.listCenter,  project.jsong)}>
        <h1 className={font.wideText}>JSONg Audio</h1>
        <h2>Multi-track interactive web audio player</h2>
        <ProjectTags tags={['software', 'typescript', 'Next.js']} namespace={project}/>
      </article> 

      <article className={clsx('card', layout.listCenter,  project.melon)}>
        <h1 className={font.wideText}>Melon Juice</h1>
        <h2>Multi-track web editor</h2>
        <ProjectTags tags={['online', 'javascript', 'react']} namespace={project}/>
      </article> 

      <article className={clsx('card', layout.listCenter,  project.sneel)}>
        <h1 className={font.wideText}>Sneel</h1>
        <h2>Music sight reading snake game</h2>
        <ProjectTags tags={['online', 'javascript', 'react']} namespace={project}/>
      </article> 

      <article className={clsx('card', layout.listCenter,  project.miki)}>
        <h1 className={font.wideText}>Hello<br/>Miki</h1>
        <h2>Cat detection and management system</h2>
        <ProjectTags tags={['online', 'hardware', 'cpp', 'javascript', 'react']} namespace={project}/>
      </article> 
      <div className={clsx('card', project.mikiFooter)}>
        <Image alt='miki' src={catSVG}/>
      </div>

      <article className={clsx('card', layout.listCenter,  project.moji)}>
        <h1 className={font.wideText}>MusiMojis</h1>
        <h2>Tamagotchi-like iOS music game</h2>
        <ProjectTags tags={['software', 'swift']} namespace={project}/>
      </article> 

    </section>
    <div className={clsx('card', layout.listCenter, project.timeline)}><h1>See Timeline</h1></div>
    
      
    {/* <details>
      <summary>My resume</summary>
      <SectionCV className={styles.cv}/>
    </details>

    <div className={clsx("card","fullPage",layout.listCenter, styles.title2)}>
      <GFXTitle type="vine" unit="25vmin" text="Work" />
    </div> */}
  </main>
</div>);
}

function LanguagesBanner(){
  return <div>
    <i className="devicon-css3-plain"></i>
    <i className="devicon-html5-plain"></i> 
    <i className="devicon-nodejs-plain"></i>
    <i className="devicon-typescript-plain"></i>
    <i className="devicon-react-original"></i>
    <i className="devicon-nextjs-original"></i>
    <i className="devicon-c-plain"></i>
    <i className="devicon-cplusplus-plain"/> 
    <i className="devicon-python-plain"></i>
    <i className="devicon-lua-plain"></i>
    <i className="devicon-swift-plain"></i>
    <i className="devicon-java-plain"></i>
  </div>
}