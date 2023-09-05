import { useState, useRef } from "react";

export default function useDelay(){
    const [pending,setPending] = useState(false)
    const timeId = useRef()
    const cancel = ()=>{
        if(timeId.current) {
            setPending(false)
            clearTimeout(timeId.current)
        }
    }
    const starter = (delay = 250)=>{
        cancel()
        setPending(true)
        timeId.current = setTimeout(()=>{setPending(false)},delay)
    }
    return [pending,starter,cancel];
}