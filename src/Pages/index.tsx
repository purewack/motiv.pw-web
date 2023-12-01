import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from 'clsx';

import styles from '@/Styles/main/main.module.css'
import hero from '@/Styles//main/main.hero.module.css'
import hello from '@/Styles//main/main.hello.module.css'

import layout from '@/Styles/layout.module.css'
import font from '@/Styles/font.module.css'
import animate from '@/Styles/animate.module.css'

import {Logo, LogoBar} from "@/Components/Logo";
import Navbar from "@/Components/Navbar";
import GFXTitle from "@/Components/GFXTitle/GFXTitle";
import AnimatedEnterDiv from "@/Components/AnimatedEnterDiv";
import TripArea from "@/Components/TripArea";

export default function MainPage() {

  // const [option, setOption] = useState('music');

return (<div className={clsx(styles.body)}>

  <header id="hero" className={clsx('fullPage', hero.content, layout.listCenter)}>
    <Logo type="full" unit={'14vw'}/>
    <h2>P H O N I C</h2>
    <h2>W O R K S</h2>
    <Logo />
    <a href="#hello" className={hero.next}><span>︾</span></a>
  </header>
    
  <TripArea>{(ref, tripped)=> <>
    <header id="hello" className={clsx(hello.body, styles.hello, 'card', tripped && styles.trip)}>
      <div className={clsx(hello.bars, hello.heading, font.headings)}>
        <LogoBar className={hello.bar1} text={"H E L L O :) "} />
        <LogoBar className={hello.bar2} text={"I - D E S I G N - "} />
        <LogoBar className={hello.bar3} text={"I - A M - D A M I A N - "} />
      </div> 
      <div className={clsx(hello.content, layout.listCenter)}>
        <h1 className={clsx(hello.who)}>H E L L <span className={hello.smile}>O</span></h1>
        <h2>I am Damian</h2>
        <h3>A web developer</h3>
      </div>
    </header>
    <Navbar className={clsx(styles.nav, 'card', tripped && styles.trip)}/>
    <span ref={ref}></span>
    </>}
  </TripArea>

  <main className={styles.content}>

    <article className={clsx('fullPage', styles.who, layout.twinCol)}>
      <h1 className={clsx(font.thin, font.headings, font.huge)}>I<br/>love<br/>to<br/>create</h1>
      <AnimatedEnterDiv 
        enterClassName={animate.slideInRight} 
        preEnterClassName={animate.preSlideIn}
        className={clsx("card","fullPage",layout.listCenter, styles.title1)}
      >
        <GFXTitle unit="25vmin" text="Work" />
      </AnimatedEnterDiv>
    </article>
      

    <div className={clsx("card","fullPage",layout.listCenter, styles.title2)}>
      <GFXTitle type="vine" unit="25vmin" text="Work" />
    </div>
  </main>
</div>);
}