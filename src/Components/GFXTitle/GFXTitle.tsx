import clsx from "clsx";
import box from './box.module.css'
import steps from './steps.module.css'
import vine from './vine.module.css'
import swirl from './swirl.module.css'
import sheets from './sheets.module.css'
import { CSSProperties } from "react";

export default function GFXTitle({
    type = 'box', 
    className = '', 
    style, 
    unit='min(27vmin, 10rem)', 
    text = '', 
    shouldStart = false
} : {
    type: string,
    text?: string,
    style?: CSSProperties,
    className?: string,
    unit?: string,
    shouldStart?: boolean
}){

    const unitStyle = {...style, '--unit': unit} as CSSProperties;

    if(type === 'box') return <div className={clsx(className, box.scene, shouldStart && box.start)} style={unitStyle}>
        <div className={box.object}>
            <div className={box.face}>
                <h1>{text}</h1>
                <p>{text}</p>
                <p>{text}</p>
            </div>
            <div className={box.face}>
                <p>{text}</p>
                <p>{text}</p>
            </div>
            <div className={box.face}>
                <i>{text}</i> 
                <i>{text}</i> 
            </div>
        </div>
    </div>


    if(type === 'steps') return <div className={clsx(className, steps.scene, shouldStart && steps.start)} style={unitStyle}>
        <div className={steps.object}>
            <span className={steps.step} data-text={text} style={{'--step': 0} as CSSProperties}>{text}</span>
            <span className={steps.step} data-text={text} style={{'--step': 1} as CSSProperties}>{text}</span>
            <h1   className={steps.step} data-text={text} style={{'--step': 2} as CSSProperties}>{text}</h1>
            <span className={steps.step} data-text={text} style={{'--step': 3} as CSSProperties}>{text}</span>
            <span className={steps.step} data-text={text} style={{'--step': 4} as CSSProperties}>{text}</span>
        </div>
    </div>

    if(type === 'vine') return <div className={clsx(className, vine.scene, shouldStart && vine.start)} style={unitStyle}>
        <div className={vine.object}>
            {[...Array(5)].map(v => {
                return <span className={vine.vine} data-text={text}>{text}</span>
            })}
        </div>
    </div>

    if(type === 'swirl') return <div className={clsx(className, swirl.object, shouldStart && swirl.start)} style={unitStyle}>
        {[...Array(8)].map((v,i,a) => {
            return <span key={`top_${i}_${text}`} className={clsx(swirl.title, swirl.titleTop)} style={{'--index': i,'--nindex': a.length - i} as CSSProperties} data-text={text}>{text}</span>
        })}
        {[...Array(8)].map((v,i,a) => {
            return <span key={`bot_${i}_${text}`} className={clsx(swirl.title, swirl.titleBottom)} style={{'--index': i,'--nindex': a.length - i} as CSSProperties} data-text={text}>{text}</span>
        })}
    </div>

    if(type === 'sheets') return <div className={clsx(className, sheets.scene, shouldStart && sheets.start)} style={unitStyle}>
        <div className={sheets.object}>
        {[...Array(9)].map((v,i,a) => {
            return <div key={`sheet_${i}_${text}`} className={clsx('grainy', sheets.face)} style={{'--index': i,'--nindex': a.length - i} as CSSProperties} data-text={text}>
                <span>{text}</span>
            </div>
        })}
        </div>
    </div>
}