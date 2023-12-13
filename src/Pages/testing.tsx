import {useState} from 'react';
import clsx from "clsx";
import test from '@/Styles/test.module.css'
import VerticalBarsSVG from '@/Components/VerticalBarsSVG'

export default function Testing(){

    const [go, setGo] = useState(false)
    return <> 
        {/* <button onClick={()=>{setGo(true)}}>Go</button> */}
        {true && <VerticalBarsSVG className={test.bars} numBars={15}/>}
    </>
}