import style from '@/Styles/error.module.css'
import {Logo} from '@/Components/Logo'
import clsx from 'clsx'
import layout from '@/Styles/layout.module.css'
import Link from 'next/link'

export default function Error(){
    return <div className={clsx("fullpage", "grainy", style.Error)}>
        <heading>
            <Link href="/"><Logo type="full"/></Link>
        </heading>
        <section className={layout.listCenter}>
            <h1>404:</h1>
            <p>This page cannot be found, check your URL</p>
        </section>
        <footer>
            <Link href="/"><Logo /> </Link>
        </footer>
    </div>
}