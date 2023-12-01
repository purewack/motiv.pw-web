import '@/Styles/global/colors.css'
import '@/Styles/global/common.css'
import '@/Styles/global/reset.css'
import type { AppProps } from 'next/app'
import {useEffect} from 'react'

export default function App({ Component, pageProps }: AppProps) {
  // useEffect(()=>{
    
  //   function scrollCSSVarListener(){
  //     const html = document.documentElement
  //     const scrollPercent = html.scrollTop / html.clientHeight
  //     html.style.setProperty('--pscroll',scrollPercent + '')
  //   }
  //   window.addEventListener('scroll',scrollCSSVarListener)
  //   window.addEventListener('resize',scrollCSSVarListener)
  //   scrollCSSVarListener()

  //   return ()=>{
  //     window.removeEventListener('scroll',scrollCSSVarListener)
  //     window.removeEventListener('resize',scrollCSSVarListener)
  //   }
  // },[])
  return <Component {...pageProps} />
}