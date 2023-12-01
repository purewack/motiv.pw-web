import clsx from "clsx";
import box from './box.module.css'
import steps from './steps.module.css'
import vine from './vine.module.css'

export default function GFXTitle({type = 'box', className, style, unit='7rem', text}){
    if(type === 'box') return <section className={clsx(className, box.scene)} style={{...style, '--unit': unit}}>
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
    </section>


    if(type === 'steps') return <section className={clsx(className, steps.scene)} style={{...style, '--unit': unit}}>
        <div className={steps.object}>
            <span className={steps.step} data-text={text} style={{'--step': 0}}>{text}</span>
            <span className={steps.step} data-text={text} style={{'--step': 1}}>{text}</span>
            <h1   className={steps.step} data-text={text} style={{'--step': 2}}>{text}</h1>
            <span className={steps.step} data-text={text} style={{'--step': 3}}>{text}</span>
            <span className={steps.step} data-text={text} style={{'--step': 4}}>{text}</span>
        </div>
    </section>

    if(type === 'vine') return <section className={clsx(className, vine.scene)} style={{...style, '--unit': unit}}>
        <div className={vine.object}>
            {[...Array(5)].map(v => {
                return <span className={vine.vine} data-text={text}>{text}</span>
            })}
        </div>
    </section>
}