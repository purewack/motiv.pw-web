import clsx from "clsx";
import font from '@/Styles/font.module.css'
import GFXTitle from "@/Components/GFXTitle/GFXTitle";

export default function Testing(){
    return (    
    <section className={clsx('card')}>
        {/* <h1 className={clsx(font.thin, font.headings, font.huge)}>I<br/>love<br/>to<br/>create</h1> */}
        {/* <AnimatedEnterDiv 
        enterClassName={animate.slideInRight} 
        preEnterClassName={animate.preSlideIn}
        className={clsx("card","fullPage",layout.listCenter, styles.title1)}
        > */}
        <GFXTitle unit="25vmin" type='swirl' text="skills" />
        {/* </AnimatedEnterDiv> */}
    </section>
    )
}