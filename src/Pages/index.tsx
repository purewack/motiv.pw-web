import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from 'clsx';

import Logo from '@/Components/Logo/Logo'

import styles from '@/Styles/main.module.css'
import hero from '@/Styles/main.hero.module.css'
import hello from '@/Styles/main.hello.module.css'
import layout from '@/Styles/layout.module.css'

export default function MainPage() {

  // const [option, setOption] = useState('music');

  return (
    <div className={clsx(styles.body)}>

      <div id="hero" className={hero.body} >
          <div className={clsx(hero.frame, 'box', 'grainy', 'card')}>
            <header className={clsx(hero.content, layout.listcenter)}>
              <Logo type="full" unit={new CSSUnitValue(14, 'vw')}/>
              <h2>P H O N I C</h2>
              <h2>W O R K S</h2>
              <Logo />
              <a href="#options" className={hero.next}><span>︾</span></a>
            </header>
            {/* <Image alt='Hero background' src={backLogo}/> */}
          </div>
      </div>

      <div className={clsx(hello.body)}>
        <div className={clsx(hello.slider, 'card')}>
          <header>
            <div className='bars heading'>
              {/* <LogoBar id='logoBarA' className="Bar1" text={"M O T I V - P W -"} />
              <LogoBar id='logoBarB' className="Bar2" text={"M O T I V - P W -"} />
              <LogoBar id='logoBarC' className="Bar3" text={"M O T I V - P W -"} /> */}
            </div>
            <div className={clsx(hello.who, layout.listcenter)}>
              <h1 className=''>H E L L <span className='heading'>O</span></h1>
              {/* <div className='Details Font Heading flex down center middle'>{who}</div> */}
            </div>
          </header>
          <nav className={clsx(layout.listleft)}>
            <Logo type='text' /><Logo className={layout.floatright}/>
          </nav>
        </div>
      </div> 

      {/* <div className='Content'> */}
        {/* <div className='BorderLogo Font Heading'>{longText}</div>
        <div className='BorderLogo Font Heading'>{longText}</div>
          
        <section className='Article Card Clean Filler'>
          <h1 className='Title Font Alt2'>Hello there ...</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis nec dui commodo vestibulum. Suspendisse pretium magna in lacus mollis dignissim. Nulla facilisi. Vivamus id accumsan lorem. Nam id sem gravida, suscipit orci eu, tempus justo. In cursus magna diam, et pharetra eros scelerisque quis. Aliquam posuere diam id ipsum consectetur mollis. Nullam quis sodales dolor, eu tincidunt sapien. Nam porta magna vitae tincidunt sagittis. Morbi porta tincidunt tellus, at pretium dui. Sed consequat risus a lorem bibendum, vitae malesuada odio volutpat. Suspendisse urna tellus, fringilla in egestas et, varius vel metus. Nunc libero nunc, commodo sit amet velit nec, commodo vehicula leo. Mauris maximus et dolor sodales vehicula. Vivamus sit amet imperdiet dolor, id facilisis est. Nullam non rhoncus urna, vehicula facilisis felis.

  Mauris pharetra maximus mi sit amet posuere. Phasellus et enim maximus, facilisis nisl in, lacinia mauris. Nulla magna felis, tristique ac ex at, mollis efficitur ex. Nullam eu augue condimentum, maximus libero ac, tincidunt nisi. In condimentum leo augue, at egestas metus suscipit in. Donec in efficitur leo. Cras vitae ornare diam. Nullam at ultrices mi, eget facilisis nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque molestie, ex a posuere ullamcorper, dui nisi scelerisque lectus, eget placerat sapien nibh sit amet risus. Donec dictum condimentum diam, id vestibulum dolor mattis ut. Integer pellentesque interdum magna, a vestibulum tellus vehicula ullamcorper.</p>
        </section> */}

        {/* <section id="options" className="HeadingScrollContainer">
        <header  className="HeadingContainer Box Card"> 
          <div className="Heading Box Card" data-selected={option}>
            <Option type='music' link="/music"  setOption={setOption}/>
            <Option type='work'  link="/work"  setOption={setOption}/>
            <Option type='me'   setOption={setOption} className='WIP'/>
          </div> 
          <div className="PersonalIntro">
            <div className={"Who "}>
              {who}
            </div>
            <div className="Bars">
            </div>
          </div>
        </header>
      </section>*/}

      {/* </div> */}
    </div>
  );
}


// function Option({className, type, setOption, link}){
//   return <a className={className} href={link ? link : '#'+type} onClick={!link ? ()=>{
//     setOption(type)
//   } : null}>
//     <h1 className="HeaderTitle PseudoAltFont Wide">{type}</h1>
//   </a>
// }