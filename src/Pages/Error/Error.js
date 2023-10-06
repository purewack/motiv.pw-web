import './style.css'
import {Logo} from '../../Components/Logo'

export default function Error(){
    return <div className="Page Error Grainy">
        <heading>
            <a href="/"><Logo type="full"/></a>
        </heading>
        <section>
            <h1>Motive 404:</h1>
            <p>This page cannot be found, check your URL</p>
        </section>
        <footer>
            <a href="/"><Logo full={false}/> </a>
        </footer>
    </div>
}