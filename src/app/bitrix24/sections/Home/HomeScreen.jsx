"use client"
import React from 'react'
import MainTitle from '../../components/home-components/main-title/MainTitle'
import './HomeScreen.scss'
import TitleInfo from '../../components/home-components/home-info/TitleInfo'
export default function TitleSection() {
  return (
    <div className='home-screen__container'>
        <MainTitle></MainTitle>
        <TitleInfo></TitleInfo>
    </div>
  )
}
