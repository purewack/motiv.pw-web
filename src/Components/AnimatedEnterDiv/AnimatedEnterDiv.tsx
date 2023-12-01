import clsx from "clsx"
import { ReactNode } from "react"
import { useInView } from "react-intersection-observer"

export default function AnimatedEnterDiv({enterClassName, preEnterClassName, className, children} : {
    enterClassName: string, 
    preEnterClassName: string,
    className: string,
    children: ReactNode
}){
    const {inView, ref} = useInView({threshold: 0.5, triggerOnce: true})
    return <div ref={ref} className={clsx(className, inView ? enterClassName : preEnterClassName)}>
        {children}
    </div>
}