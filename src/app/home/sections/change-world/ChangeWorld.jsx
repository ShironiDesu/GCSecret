import React from 'react'
import "./changeWorld.scss"
import ButtonRounded from '@/components/ui/ButtonRounded'
import Image from 'next/image'

export default function ChangeWorld() {
  return (
    <div className='change-world'>
        <div className="container">
            <h2>Готовы узнать как <span className='blue-text'>Битрикс24 изменит</span> Ваш рабочий мир?</h2>
            <p>Вы можете ждать подходящего момента для внедрения Битрикс24, либо же решиться и начать <span className='blue-text'>новый этап для развития Вашей компании.</span></p>
            <ButtonRounded className="change-world__btn">
                Я готов
                <Image className='button-img' src="/icons/arrow-top-right-white.png" layout='fixed' width={24} height={30} alt='arrow top right white png'/>
            </ButtonRounded>
        </div>
    </div>
  )
}
