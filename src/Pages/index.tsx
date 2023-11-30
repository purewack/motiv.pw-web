import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from 'clsx';

import styles from '@/Styles/main.module.css'
import hero from '@/Styles/main.hero.module.css'
import hello from '@/Styles/main.hello.module.css'
import layout from '@/Styles/layout.module.css'
import font from '@/Styles/font.module.css'

import {Logo, LogoBar} from "@/Components/Logo";
import Navbar from "@/Components/Navbar";

export default function MainPage() {

  // const [option, setOption] = useState('music');

  return (<div className={clsx(styles.body)}>

      <div className={hero.body} >
          <div className={clsx(hero.frame, 'box', 'grainy', 'card')}>
            <header id="hero" className={clsx(hero.content, layout.listCenter)}>
              <Logo type="full" unit={'14vw'}/>
              <h2>P H O N I C</h2>
              <h2>W O R K S</h2>
              <Logo />
              <a href="#hello" className={hero.next}><span>︾</span></a>
            </header>
            {/* <Image alt='Hero background' src={backLogo}/> */}
          </div>
      </div>

      <div className={clsx(hello.body)}>
        <div className={clsx(hello.slider, 'card')}>
          <header id="hello">
            <div className={clsx(hello.bars, hello.heading, font.headings)}>
              <LogoBar className={hello.bar1} text={"H E L L O :) "} />
              <LogoBar className={hello.bar2} text={"I - D E S I G N - "} />
              <LogoBar className={hello.bar3} text={"I - A M - D A M I A N - "} />
            </div>
            <div className={clsx(hello.who, layout.listCenter)}>
              <h1 >H E L L <span className={hello.smile}>O</span></h1>
              {/* <div className='Details Font Heading flex down center middle'>{who}</div> */}
            </div>
          </header>
          <Navbar />
        </div>
      </div>

</div>);
}