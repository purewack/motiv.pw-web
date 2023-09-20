import "./style.css"

export function Logo({ type='icon', className = ""}) {
  return type === 'backed' ? (
    <div className={"Logo Backed " + className}>
      <div className='Container'>
        <h1 className="Main">{children}</h1>
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
  )
 
  :
 
  type === 'full' ? ( 
    <div className="Logo Sidefan">
      <div className='Wrap ll'>
        <svg viewBox="0 0 12 16"  className='SpreadScene ll'>
          {/* <rect x='0' y='0' width={12} height={16} stroke='red' fill='purple'></rect> */}
          <g className="Spread ll"><text x={1} y={13.5} >M</text></g>
          <g className="Spread ll"><text x={1} y={13.5} >M</text></g>
          <g className="Spread ll"><text x={1} y={13.5} >M</text></g>
        </svg>
      </div>
      {/* <div> */}
        <svg viewBox="0 0 76 16" className="LogoTextScene">
          {/* <rect x='0' y='0' width={76} height={16} stroke='black' fill='green'></rect> */}
          <text x={0} y={13.5} className="LogoText">M O T I V</text>
          <line x1={1} x2={57} y1={15.5} y2={15.5}></line>
        </svg>
      {/* </div> */}
      <div className='Wrap Dummy'></div>
      <div className='Wrap rr'>
        <svg viewBox="0 0 16 16" className='SpreadScene rr'>
          {/* <rect x='0' y='0' width={16} height={16} stroke='red' fill='purple'></rect> */}
          <g className="Spread rr"><text x={4} y={13.5} >V</text></g>
          <g className="Spread rr"><text x={4} y={13.5} >V</text></g>
          <g className="Spread rr"><text x={4} y={13.5} >V</text></g>
        </svg>
      </div>
    </div>
  )

  : (
    <div className='Logo Icon'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
        <path d="M 0 200 L 125 200 C 166.421 200 200 166.421 200 125 L 200 0"/>
        <path d="M 0 325 L 203.125 325 C 270.434 325 325 270.434 325 203.125 L 325 0"/>
        <path d="M 0 450 L 281.25 450 C 374.448 450 450 374.448 450 281.25 L 450 0"/>
      </svg>
    </div>
  );
}

export function LogoBar({ id, className, text }) {
  const longText = [...Array(40).fill(text + " ")];

  return (
    <div id={id} className={className}>
      <div className="object Bar HeadingFont">
        <div className="face">{longText}</div>
        <div className="face">{longText}</div>
        <div className="face">{longText}</div>
        <div className="face">{longText}</div>
      </div>
    </div>
  );
}
  