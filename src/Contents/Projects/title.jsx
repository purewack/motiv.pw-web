import p1 from "@/Public/Media/NumCalcium/face.JPG"
import Image from "next/image"

export default <div className="TitleContents">
<h1>My Project Life</h1>
<p>This is an <i>almost</i> complete summary of what I had been doing work wise over the years. I hope that someone can make some use of the OpenSource projects on here</p>
<div className="Photos">
    <div className="Polaroid Box" data-title={'NumCalcium'} >
    <Image src={p1}/>
    </div>
    <div className="Polaroid Box" data-title={'NumCalcium'} >
    <Image src={p1}/>
    </div>
    <div className="Polaroid Box" data-title={'NumCalcium'} >
    <Image src={p1}/>
    </div>
    <div className="Polaroid Box" data-title={'NumCalcium'} >
    <Image src={p1}/>
    </div>
</div>
</div>