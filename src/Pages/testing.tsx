import clsx from "clsx";
import font from '@/Styles/font.module.css'
import card from '@/Styles/card.module.css'
import layout from '@/Styles/layout.module.css'
import GFXTitle from "@/Components/GFXTitle/GFXTitle";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Testing(){

    return (    
    <section className={clsx(card.normal, layout.gridAbsolute, card.page200)}>
        <GFXTitle className={clsx(layout.placeCenter)} unit="20rem" type='flip' items={[
            <Icon icon="icomoon-free:html-five" />,
            <Icon icon="teenyicons:css3-solid" />,
            <Icon icon="raphael:js" />,
            <Icon icon="teenyicons:typescript-solid" />,
            <Icon icon="mdi:react" />,
            <Icon icon="akar-icons:nextjs-fill" />,
            <Icon icon="devicon-plain:c" />,
            <Icon icon="simple-icons:cplusplus" />,
            <Icon icon="cib:python" />,
            <Icon icon="file-icons:lua" />,
            <Icon icon="simple-icons:swift" />,
            <Icon icon="la:java" />
        ]}/>
    </section>
    )
}