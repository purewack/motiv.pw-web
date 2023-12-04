import clsx from "clsx"

export default function ProjectTags({tags, namespace}: {tags: string[], namespace: any}){
    return <ul className={namespace.tags}>
        {tags.map((t:string,i:number) => <li key={i} className={clsx(namespace.tag, namespace[t])}>{t}</li>)}
    </ul>
}