import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from 'clsx';
import { Icon } from '@iconify/react';

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
    <section className={clsx(skills.body, layout.twinCol)}>
      <h1 className={clsx(skills.title, font.size800)}>Skills</h1>

      <div className={clsx('card',skills.card,layout.gridAbsolute)}>
        <h1 className={clsx(skills.heading, font.thin, font.headings, font.size800)}>I<br/>love<br/>to<br/>create</h1>
        <TripArea>{(
            triggerRef: React.RefObject<HTMLInputElement>, 
            tripped: boolean
          ) => <>
            <GFXTitle type='swirl' text="skills" className={skills.gfx} shouldStart={tripped}/>
            <span className={skills.trigger} ref={triggerRef}></span>
          </>
        }</TripArea>
      </div>
    </section>

    <section className={clsx(skills.content)}>
      <div className={clsx(layout.twinCol)}>
      <div className={clsx(skills.info, font.subtext, font.right, font.weight600, font.size800)}>
        <p>I'm  
          <TripArea>{(
            triggerRef: React.RefObject<HTMLInputElement>, 
            tripped: boolean
          ) => <span ref={triggerRef} className={clsx(tripped && skills.polish)}>Polish</span>}
          </TripArea>
        </p>
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
      </div>
      <LanguagesBanner className={main.test}/>
    </section>
    
    <h1 className={font.size800}>Projects</h1>
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

function LanguagesBanner({className}){
  return <div className={className}>
    <Icon icon="icomoon-free:html-five" />
    <Icon icon="teenyicons:css3-solid" />
    <Icon icon="raphael:js" />
    <Icon icon="teenyicons:typescript-solid" />
    <Icon icon="mdi:react" />
    <Icon icon="akar-icons:nextjs-fill" />
    <Icon icon="devicon-plain:c" />
    <Icon icon="simple-icons:cplusplus" />
    <Icon icon="cib:python" />
    <Icon icon="file-icons:lua" />
    <Icon icon="simple-icons:swift" />
    <Icon icon="la:java" />
  </div>
}