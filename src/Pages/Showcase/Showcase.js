import './style.css'

import { useEffect, useRef, useState } from "react";
import {Logo} from '../../Components/Logo'
import useDelay from "../../Util/DelayedState";
import DetailDiv from "../../Components/DetailDiv";
import TestDiv from "../../Components/TestDiv";
import AlbumCard from "../../Components/AlbumCard";

export default function Showcase() {

  const [pending, start] = useDelay()

  return (
    <div className="Showcase Page">
      <header className="Title" id="title">
        <Logo type="full" />
        <a href="#title" class="Home"><Logo /></a>
      
      </header>
      <div className="Albums">
        <AlbumCard title={'Natural Business'} />
        <AlbumCard title={'Chillian'} cover={'https://i1.sndcdn.com/artworks-000689797216-p1rfol-t500x500.jpg'}/>
        <AlbumCard title={'Other'}/>
      </div>

      <div className="Grid Content">
        <section className="">
          <h1 className="">H1 motiv aesthetic</h1>
          <h2 className="">H2 motiv aesthetic</h2>
          <div>
          <h3 className="">H3 motiv aesthetic</h3>
          <h4 className="">H4 motiv aesthetic</h4>
          <h5 className="">H5 motiv aesthetic</h5>
          <h6 className="">H6 motiv aesthetic</h6>

          <p>Lorem ipsum</p>
          <p className="FontAlt">Lorem ipsum</p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eu nibh mauris. Suspendisse vehicula, lectus vitae tempor iaculis,
            mi orci egestas erat, et pulvinar nunc est vitae ligula. In aliquam
            euismod ipsum sit amet rhoncus. Aliquam non massa sed enim
            ullamcorper rhoncus sed egestas nibh. Integer aliquet augue dui, non
            rhoncus sem tristique vel. Integer fringilla ipsum sapien, ac
            efficitur tortor ultrices a. Donec quis rutrum quam. Ut id aliquet
            lorem. Donec semper aliquam gravida. Donec id neque suscipit, cursus
            mi et, varius lacus. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Ut at odio consectetur
            leo laoreet euismod non eu felis. Aliquam dictum, justo at imperdiet
            lacinia, urna lectus cursus urna, nec pellentesque eros nisi et
            enim. Mauris lacinia augue eu purus condimentum, a pellentesque dui
            vehicula.
          </span>
          </div>
        </section>
        <section>
          <h1>Interactive</h1>
          <div>
            <button onClick={()=>{start(1000)}}>{pending ? 'Waiting' : 'Hello'}</button>
            <input type="button" value="Input" />
            <input type="submit" value="Submit" />
          </div>
        </section>

        <section>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eu nibh mauris. Suspendisse vehicula, lectus vitae tempor iaculis,
            mi orci egestas erat, et pulvinar nunc est vitae ligula. In aliquam
            euismod ipsum sit amet rhoncus. Aliquam non massa sed enim
            ullamcorper rhoncus sed egestas nibh. Integer aliquet augue dui, non
            rhoncus sem tristique vel. Integer fringilla ipsum sapien, ac
            efficitur tortor ultrices a. Donec quis rutrum quam. Ut id aliquet
            lorem. Donec semper aliquam gravida. Donec id neque suscipit, cursus
            mi et, varius lacus. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Ut at odio consectetur
            leo laoreet euismod non eu felis. Aliquam dictum, justo at imperdiet
            lacinia, urna lectus cursus urna, nec pellentesque eros nisi et
            enim. Mauris lacinia augue eu purus condimentum, a pellentesque dui
            vehicula.
          </div>
        </section>

        {/* <section>
          <SplitCard className={'testcard'}>
            <img className="cat1"/>
            <img className="cat2"/>
            <p>Cat Test</p>
          </SplitCard>
        </section> */}


        <DetailDiv className="Song" title="Dreams" descriptionComponent={
          <div className="DescriptionContent Box Card">
            Testing descriptive div
          </div>
        }> 
          <TestDiv />
          {/* <Video className={'Box'} media={'dreams_park_preview_silent.mp4'} embed={'https://www.youtube.com/embed/L0P8Q4jsqX0'}/> */}
        </DetailDiv>
      </div>
      <footer>Copyright etc.</footer>
    </div>
  );
}