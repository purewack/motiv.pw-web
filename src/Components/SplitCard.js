import "./Styles/SplitCard.css"

export function SplitCard({children, className}){

    return <div className={"SplitCard " + className}>
        {children && <>
            <div className="idle">{children[0]}</div>
            <div className="action">{children[1]}</div>
            <div className="title">{children[2]}</div>
        </>}
    </div>
}