import React from 'react'
import "./whyUs.scss"
import AfterImplementation from '@/app/segments/[name]/sections/afterImplementation/AfterImplementation'
import FadeUp_block from '@/components/ui/FadeUp-block'
import SwiperAdv from './SwiperAdv'

export default function whyUs() {

    const afterImpAdvantages = [
        {
            title: "Первый месяц после внедерния",
            imgSrc: "/images/imp-first.png",
            width: 162,
            height: 276,
            descriptions: [
                "Своевременное выполнение задач увеличивается <span class='blue_text'>до 80%</span>",
                "Улучшение совместной работы команды <span class='blue_text'>на 15%</span>",
                "Улучшение коммуникации с клиентами <span class='blue_text'>до 30%</span>"
            ]
        },
        {
            title: "Второй месяц после внедерния",
            imgSrc: "/images/imp-second.png",
            width: 206,
            height: 246,
            descriptions: [
                "Своевременное выполнение задач увеличивается <span class='blue_text'>до 95%</span>",
                "Улучшение совместной работы команды <span class='blue_text'>на 25%</span>",
                "Увеличение дохода <span class='blue_text'>до 10%</span> без увеличения штата"
            ]
        },
        {
            title: "Третий месяц после внедрения",
            imgSrc: "/images/imp-third.png",
            width: 206,
            height: 246,
            descriptions: [
                "Повышение эффективности автоматизированных отделов <span class='blue_text'>на 60%</span>",
                "Экономия времени на рутинные задачи <span class='blue_text'>на 40%</span>",
                "Увеличение дохода <span class='blue_text'>до 15%</span> без увеличения штата"
            ]
        }
    ]

    const advantagesTexts = [
        {
            title: "Многозадачность.",
            desc: "Функционал объединяет <span class='blue_text'>все процессы компании</span>, и нет запроса, которого нельзя реализовать."
        },
        {
            title: "Возможность.",
            desc: "Интеграция со всеми сервисами Казахстана : 1С, телефония, мессенджеры, почтовые службы, сайты и социальные сети."
        },
        {
            title: "Стабильность.",
            desc: "Платформа совершенствовалась на протяжении 27 лет. Битрикс24 всегда работает, не подводя."
        },
        {
            title: "Популярность.",
            desc: "Битрикс24 входит в топ-5 сервисов международного рынка. Ежегодно более 15млн компаний выбирают эту систему."
        }
    ]

  return (
    <div className='why-us'>
        <div className='container'>
            <h2>
                Почему <span className="blue_text">так много</span> компаний выбирают Битрикс24?
            </h2>
            <div className='why-us__description'>
                <SwiperAdv advArr={advantagesTexts}/>
            </div>
            <div className='why-us__fast-results'>
                <h3>Быстрые результаты.</h3>
                <div className='why-us__inner-main'>
                    {afterImpAdvantages.map(adv => (
                        <AfterImplementation key={adv.title} adv={adv}/>
                    ))}
                </div>
            </div>
        </div>  
    </div>
  )
}
