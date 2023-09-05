import { useEffect, useRef, useState } from "react";
import {Logo, LogoBar} from '../Components/Logo'
import DetailDiv from "../Components/DetailDiv";
import Video from "../Components/Video";
import './Styles/Main.css'
import './Styles/Main.Title.css'
import './Styles/Main.Mobile.css'

import backLogo from '../Media/_MG_4734.JPG'

import who from '../Contents/who.jsx'
import songDreamsDescription from '../Contents/Songs/dreams.jsx'
import TestDiv from "../Components/TestDiv";
import AlbumCard from "../Components/AlbumCard";





/* <section className="Content Grainy">
{true && 
<div id="music" className="Block Box Card Songs ">
 
    <AlbumCard className="Box Inner" title={'Natural Business'} />
    <AlbumCard className="Box Inner" title={'Chillian'} cover={'https://i1.sndcdn.com/artworks-000689797216-p1rfol-t500x500.jpg'}/>
    <AlbumCard className="Box Inner" title={'Other'}/>
</div>}
</section> */



export default function Main() {

  // let { id } = useParams();

  const [option, setOption] = useState('music');

  return (
    <div className="Main Page">
  
      <header id="opening" className="Hero" >
          <div className="Title Box Grainy Card">
            <Logo type="full" />
            <Logo />
            <h2>P H O N I C</h2>
            <h2>W O R K S</h2>
            <img src={backLogo}/>
            <a href="#options" className="Scroller"><span>︾</span></a>
          </div>
      </header>

      <section id="options" className="HeadingScrollContainer">
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
          <LogoBar className="Bar1" text={"M O T I V - P W -"} />
          <LogoBar className="Bar2" text={"M O T I V - P W -"} />
          <LogoBar className="Bar3" text={"M O T I V - P W -"} />
          </div>
        </div>
      </header>  
      </section>

    </div>
  );
}


function Option({className, type, setOption, link}){
  return <a className={className} href={link ? link : '#'+type} onClick={!link ? ()=>{
    setOption(type)
  } : null}>
    <h1 className="HeaderTitle PseudoAltFont Wide">{type}</h1>
  </a>
}