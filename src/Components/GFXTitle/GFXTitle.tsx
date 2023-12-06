import clsx from "clsx";
import box from './box.module.css'
import steps from './steps.module.css'
import vine from './vine.module.css'
import swirl from './swirl.module.css'
import sheets from './sheets.module.css'
import flip from './flip.module.css'
import card from '@/Styles/card.module.css'
import { CSSProperties } from "react";

export default function GFXTitle({
    type = 'box', 
    className = '', 
    style, 
    unit='min(27vmin, 10rem)', 
    items, 
    shouldStart = false
} : {
    type: string,
    items?: string | any[],
    style?: CSSProperties,
    className?: string,
    unit?: string,
    shouldStart?: boolean
}){

    const unitStyle = {...style, '--unit': unit} as CSSProperties;

    if(type === 'box') return <div className={clsx(className, box.scene, shouldStart && box.start)} style={unitStyle}>
        <div className={box.object}>
            <div className={box.face}>
                <h1>{items}</h1>
                <p>{items}</p>
                <p>{items}</p>
            </div>
            <div className={box.face}>
                <p>{items}</p>
                <p>{items}</p>
            </div>
            <div className={box.face}>
                <i>{items}</i> 
                <i>{items}</i> 
            </div>
        </div>
    </div>


    if(type === 'steps') return <div className={clsx(className, steps.scene, shouldStart && steps.start)} style={unitStyle}>
        <div className={steps.object}>
            <span className={steps.step} data-items={items} style={{'--step': 0} as CSSProperties}>{items}</span>
            <span className={steps.step} data-items={items} style={{'--step': 1} as CSSProperties}>{items}</span>
            <h1   className={steps.step} data-items={items} style={{'--step': 2} as CSSProperties}>{items}</h1>
            <span className={steps.step} data-items={items} style={{'--step': 3} as CSSProperties}>{items}</span>
            <span className={steps.step} data-items={items} style={{'--step': 4} as CSSProperties}>{items}</span>
        </div>
    </div>

    if(type === 'vine') return <div className={clsx(className, vine.scene, shouldStart && vine.start)} style={unitStyle}>
        <div className={vine.object}>
            {[...Array(5)].map(v => {
                return <span className={vine.vine} data-items={items}>{items}</span>
            })}
        </div>
    </div>

    if(type === 'swirl') return <div className={clsx(className, swirl.object, shouldStart && swirl.start)} style={unitStyle}>
        {[...Array(8)].map((v,i,a) => {
            return <span key={`top_${i}_${items}`} className={clsx(swirl.title, swirl.titleTop)} style={{'--index': i,'--nindex': a.length - i} as CSSProperties} data-items={items}>{items}</span>
        })}
        {[...Array(8)].map((v,i,a) => {
            return <span key={`bot_${i}_${items}`} className={clsx(swirl.title, swirl.titleBottom)} style={{'--index': i,'--nindex': a.length - i} as CSSProperties} data-items={items}>{items}</span>
        })}
    </div>

    if(type === 'sheets') return <div className={clsx(className, sheets.scene, shouldStart && sheets.start)} style={unitStyle}>
        <div className={sheets.object}>
        {[...Array(9)].map((v,i,a) => {
            return <div key={`sheet_${i}_${items}`} className={clsx(card.grainy, sheets.face)} style={{'--rand': Math.random(), '--index': i,'--nindex': a.length - i} as CSSProperties} data-items={items}>
                <span>{items}</span>
            </div>
        })}
        </div>
    </div>

    if(type === 'flip') return <div className={clsx(className, flip.scene, shouldStart && flip.start)} style={unitStyle}>
    <div className={flip.object}>
    {items.map((item,i,a) => {
        return <div key={`flip_page_${i}`} className={clsx(card.normal, flip.face)} style={{'--index': i,'--nindex': a.length - i, '--total':a.length} as CSSProperties} >
            <div className={flip.item}>
            {item
            }</div>
        </div>
    })}
    </div>
    </div>
}