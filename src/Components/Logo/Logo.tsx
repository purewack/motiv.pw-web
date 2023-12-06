import clsx from "clsx";
import {CSSProperties} from 'react'
import full from './full.module.css'
import icon from './icon.module.css'

export default function Logo({ type='icon', className, style, unit}: {
  type?: string,
  className?: string,
  style?: CSSProperties,
  unit?: string
}) {

  const common = {
    '--unit': unit ? unit : 'min(10em,10vw)'
  } as CSSProperties
  const commonsvg = {
    'display': 'inline-block',
    'margin':0,
    'padding':0, 
  } 

  return <>
  {/* {type === 'backed' && 
    <div className={clsx(common.logo, backed.logo, className)} style={{...common, ...style}}>
      <div className='container'>
        <h1 className="main">{children}</h1>
        {[...Array(5)].map((v, i) => (
          <h1
            className="Sub"
            key={"logo_shadow" + i}
            style={{
              animationDelay: i + "s",
              animationDuration: clones + "s"
            }}
          >
          m o t i v
          </h1>
        ))}
      </div>
    </div>
  } */}


  {type === 'full' && ( 
    <div className={clsx(full.logo, className)} style={{...common, ...style}}>
      <div className={clsx(full.wrap, full.left)}>
        <svg viewBox="0 0 12 16" style={commonsvg} className={full.spreadscene}>
          {/* <rect x='0' y='0' width={12} height={16} stroke='red' fill='purple'></rect> */}
          <g className={full.spread}><text x={1} y={13.5} >M</text></g>
          <g className={full.spread}><text x={1} y={13.5} >M</text></g>
          <g className={full.spread}><text x={1} y={13.5} >M</text></g>
        </svg>
      </div>
      <div>
        <svg viewBox="0 0 76 16" style={commonsvg} className={full.logotextscene}>
          {/* <rect x='0' y='0' width={76} height={16} stroke='black' fill='green'></rect> */}
          <text x={0} y={13.5} className={full.logotext}>M O T I V</text>
          {/* <line x1={1} x2={57} y1={15.5} y2={15.5}></line> */}
        </svg>
      </div>
      <div className={clsx(full.wrap, full.dummy)}></div>
      <div className={clsx(full.wrap, full.right)}>
        <svg viewBox="0 0 16 16" style={commonsvg} className={full.spreadscene}>
          {/* <rect x='0' y='0' width={16} height={16} stroke='red' fill='purple'></rect> */}
          <g className={full.spread}><text x={4} y={13.5} >V</text></g>
          <g className={full.spread}><text x={4} y={13.5} >V</text></g>
          <g className={full.spread}><text x={4} y={13.5} >V</text></g>
        </svg>
      </div>
    </div>
  )}

  {type === "icon" && <div className={clsx(icon.logo, className)} style={{...common, ...style}}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
      <path d="M 0 200 L 125 200 C 166.421 200 200 166.421 200 125 L 200 0"/>
      <path d="M 0 325 L 203.125 325 C 270.434 325 325 270.434 325 203.125 L 325 0"/>
      <path d="M 0 450 L 281.25 450 C 374.448 450 450 374.448 450 281.25 L 450 0"/>
    </svg>
  </div>}

  {type === "text" && <h3 className={clsx(className)} style={{...common, ...style}}>M O T I V</h3>}
  </> 
}

