import clsx from "clsx";
import Logo from "../Logo/Logo";
import layout from "@/Styles/layout.module.css"
import font from "@/Styles/font.module.css"

export default function Navbar({className}){
    return <nav className={clsx(layout.barCenter, className)}>
    <Logo type='text' className={font.smallTitle}/><Logo className={layout.floatRight}/>
    </nav>
}