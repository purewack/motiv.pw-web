import style from '@/Styles/error.module.css'
import {Logo} from '@/Components/Logo'
import clsx from 'clsx'

export default function Error(){
    return <div className={clsx(["Page Grainy", style.Error])}>
        <heading>
            <a href="/"><Logo type="full"/></a>
        </heading>
        <section className={clsx(["flex","down","center"])}>
            <h1>404:</h1>
            <p>This page cannot be found, check your URL</p>
        </section>
        <footer>
            <a href="/"><Logo full={false}/> </a>
        </footer>
    </div>
}