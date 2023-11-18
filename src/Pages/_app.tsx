import '@/Styles/global/colors.css'
import '@/Styles/global/debug.css'
import '@/Styles/global/layouts.css'
import '@/Styles/global/unclassed.css'
import '@/Styles/global/classed.css'
import '@/Styles/global/logo.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}