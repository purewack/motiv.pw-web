import style from '@/Styles/error.module.css'
import {Logo} from '@/Components/Logo'
import clsx from 'clsx'
import layout from '@/Styles/layout.module.css'
import Link from 'next/link'

export default function Error(){
    return <div className={clsx("card", 'grainy', 'cardPage700', layout.listCenter, layout.margin700, style.Error)}>
        <header>
            <Link href="/"><Logo className={style.logo} type="full"/></Link>
        </header>
        <section className={layout.listCenter}>
            <h1>404:</h1>
            <p>This page cannot be found, check your URL</p>
        </section>
        <footer>
            <Link href="/"><Logo /> </Link>
        </footer>
    </div>
}