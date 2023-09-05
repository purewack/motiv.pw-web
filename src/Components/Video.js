import { useEffect, useTransition } from "react";
import useDelay from "../Util/DelayedState";

export default function Video({media, embed, isExternal = false, className}){

    const [pending, startDelay] = useDelay();
    useEffect(()=>{
        startDelay(2000)
    },[isExternal])
    const cl = className + (pending ? ' Transition ' : '')

    return (<>
        {(isExternal && !pending) ? 
            <iframe className={cl} src={embed} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        :
            <video autoPlay muted loop playsInline className={cl}>
                <source src={require('../Media/' + media)} type="video/mp4"/>
            </video>
        }
    </>)
}