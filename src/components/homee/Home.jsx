import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import Card from "../Card/Card" 

import React from 'react'
const cardContent = [
    'محتوى البطاقة الأولى',
    'محتوى البطاقة الثانية',
    'محتوى البطاقة الثالثة'
  ];
const Home = () => {
  return (
    <div className="home">
    <Navbar/>
    <Card/>
    <Slider cards={cardContent} />
    </div>
  )
}

export default Home