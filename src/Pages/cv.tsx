import styles from '@/Styles/cv/style.module.css'
import clsx from 'clsx'

export default function SectionCV({className}){
    return <article className={clsx(styles.body, className)}>
        <h1 className={clsx(styles.title,'card')}>CV</h1>
        <h2 className={clsx(styles.who,'card')}>Damian Nowacki</h2>
        <p className={clsx(styles.content,'card')}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam suscipit dicta voluptatem soluta impedit eaque beatae. Ut blanditiis, et doloribus libero velit possimus, iste, quis perspiciatis a cum repellendus cupiditate!</p>
    </article>
}