import Link from 'next/link'
import {Logo} from '@/Components/Logo'
import clsx from 'clsx'

import style from '@/Styles/error.module.css'
import layout from '@/Styles/layout.module.css'
import card from '@/Styles/card.module.css'
import font from '@/Styles/font.module.css'

export default function Error(){
    return <div className={clsx(card.normal, card.grainy, card.page200, font.headings, layout.listSpacedCenter, layout.margin700, style.Error)}>
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