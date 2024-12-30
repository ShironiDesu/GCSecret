import React from 'react'
import "./changeWorld.scss"
import ButtonRounded from '@/components/ui/ButtonRounded'
import Image from 'next/image'
import FadeUp_block from '@/components/ui/FadeUp-block'

export default function ChangeWorld() {
  return (
    <div className='change-world'>
        <div className="container">
            <FadeUp_block>
                <h2>Готовы узнать как <span className='blue-text'>Битрикс24 изменит</span> Ваш рабочий мир?</h2>
            </FadeUp_block>
            <FadeUp_block>
                <p>Вы можете ждать подходящего момента для внедрения Битрикс24, либо же решиться и начать <span className='blue-text'>новый этап для развития Вашей компании.</span></p>
            </FadeUp_block>
            <ButtonRounded className="change-world__btn">
                Я готов
                <Image className='button-img' src="/icons/arrow-top-right-white.png" layout='fixed' width={24} height={30} alt='arrow top right white png'/>
            </ButtonRounded>
        </div>
    </div>
  )
}
