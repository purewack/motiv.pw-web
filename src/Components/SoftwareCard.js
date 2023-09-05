import './Styles/SoftwareCard.css'

export default function SoftwareCard({title, mobile=true, className = '', children, ...restProps}){
    return <div className={"SoftwareCard " + (mobile ? "Mobile " : "") + className} {...restProps}>
        <header className="Header">
            {!mobile ? <>
                <div className='Control'></div>
                <div className='Control'></div>
                <div className='Control'></div>
                <h1>{title}</h1>
            </> 
            :
            <>
                <p className='Time'>21:37</p>
                <div className='Battery'></div>
            </>}
        </header>
        <div className="Content">
        {children}
        </div>
    </div>
}