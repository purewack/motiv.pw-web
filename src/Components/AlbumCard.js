import { useState } from "react"
import './Styles/AlbumCard.css'
import noCover from '../Media/nocover.svg'

export default function AlbumCard({
    className = '', 
    cover: coverUrl = undefined,
    title,
    content
}){

    const [expand, setExpand] = useState(false)

    return <div className={"AlbumCard " + (expand ? "Expand " : "") + className}>
        <h2>{title}</h2>
        <img src={coverUrl ? coverUrl : noCover} alt="Album Cover"/>
        {expand ? content : null}
    </div>
}