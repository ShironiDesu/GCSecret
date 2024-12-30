import Image from 'next/image'
import React from 'react'
import "./afterImplementation.scss"
import FadeUp_block from '@/components/ui/FadeUp-block'

export default function AfterImplementation({adv}) {
  return (
    <FadeUp_block>
        <div className='after-implementation'>
            <h3>{adv.title}</h3>
            <div className='after-implementation__main'>
                <Image className={`after-implementation__number-img ${adv.width === 162 ? "first-img" : ""}`} width={adv.width} height={adv.height} src={adv.imgSrc} layout='fixed' alt={adv.title}/>
                <div className={`after-implementation__some-descriptions ${adv.imgSrc == "/images/imp-first.png" ? "extra-margin" : ""}`}>
                    {adv.descriptions.map(desc => (
                        <div key={desc} className='after-implementation__description'>
                            <Image className='after-implementation__tick-img' src="/icons/select.svg" width={27.97} height={27.12} layout='fixed' alt="select svg"/>
                            <p dangerouslySetInnerHTML={{ __html: desc }}/>
                        </div>
                    ))}              
                </div>
            </div>
        </div>
    </FadeUp_block>
  )
}
