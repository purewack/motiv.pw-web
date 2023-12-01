import React from 'react'
import { InView, useInView } from "react-intersection-observer";

export default function TripArea({children}){
    return <InView triggerOnce threshold={1}>
    {({ inView, ref, entry }) => children(ref, inView)}
    </InView>
}