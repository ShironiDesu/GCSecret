"use client"
import React from 'react'
import "./BitrixInfoTitle.scss"
export default function BitrixInfoTitle({title}) {
  return (
    <div className='bitrix-overview__title bitrix-background'><p>{title}</p></div>
  )
}
