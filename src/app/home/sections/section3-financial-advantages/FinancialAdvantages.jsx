import React from 'react'
import "./financialAdvantages.scss"
import ButtonRounded from '@/components/ui/ButtonRounded'
import Image from 'next/image'
import FadeUp_block from '@/components/ui/FadeUp-block'

export default function FinancialAdvantages() {
  return (
    <div className='financial-advantages'>
      <div className='container'>
        <h2>Финансовые <span className="blue_text">преимущества</span> Битрикс24</h2>

        <div className='financial-advantages__main'>
          <FadeUp_block>
            <div className='financial-advantages__adv-card'>
              <h4 className='financial-advantages__titles-h4'>Низкие оплаты на лицензию</h4>
              <div className='financial-advantages__desc'>
                <p>Стоимость одного пользователя в год</p>
                <h4 style={{whiteSpace: "nowrap"}} className='financial-advantages__price'>
                  4&nbsp;800&nbsp;-&nbsp;8&nbsp;160₸
                </h4>
              </div>
            </div>
          </FadeUp_block>

          <FadeUp_block>
            <div className='financial-advantages__adv-card'>
              <h4 className='financial-advantages__titles-h4'>Единоразовый платеж за настройку</h4>
              <div className='financial-advantages__desc'>
                <div className='financial-advantages__desc-left'>
                  <p>Автоматизация целого отдела вашего бизнеса </p>
                  <p className='financial-advantages__par-mini'>
                    <span className="blue_text">*</span>отдел продаж, снабжения, поддержки, маркетинга, производства и других
                  </p>
                </div>
                <h4 style={{whiteSpace: "nowrap"}} className='financial-advantages__price'>
                  300&nbsp;000₸
                </h4>
              </div>
            </div>
          </FadeUp_block>

          <FadeUp_block>
            <div className='financial-advantages__some-cards'>
              <div className='financial-advantages__small-card'>
                <p className='financial-advantages__big-price'>
                  15%
                </p>
                <p>Скидки при автоматизации <span className="blue_text">двух</span> отделов сразу</p>
              </div>

              <div className='financial-advantages__small-card'>
                <p className='financial-advantages__big-price'>
                  20%
                </p>
                <p>Скидки при автоматизции <span className="blue_text">трёх</span> отделов сразу</p>
              </div>

              <div className='financial-advantages__small-card'>
                <p className='financial-advantages__big-price'>
                  40%
                </p>
                <p>
                  Скидки при <span className="blue_text">тотальной</span> автоматизации
                </p>
              </div>
            </div>
          </FadeUp_block>

          <FadeUp_block>
            <p className='financial-advantages__bottom-desc'>
              <span className='bold-text'>Результатом будет надежный инструмент для Вашего бизнеса на годы!</span> <br />
              <span className='opacity-text'>Стоимость настройки включает целый месяц обслуживания нашими специалистами, с неограниченным количеством обращений и изменений.</span>
            </p>
          </FadeUp_block>

        </div>
        <ButtonRounded className="financial-advantages__btn">
          Быстрое внедрение
          <Image className='button-img' src="/icons/arrow-top-right-white.png" layout='fixed' width={24} height={30} alt='arrow top right white png'/>
        </ButtonRounded>
      </div>
    </div>
  )
}
