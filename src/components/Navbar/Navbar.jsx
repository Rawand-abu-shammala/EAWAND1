import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (

  <>
    <div className="profile">
    <span className='k'>Welcome back,<br/>Jenny!</span>
      <img src="../../../assets/Rectangle 1 (1).png" alt="صورة الملف الشخصي" />
    </div>
    <div className="app">
        
      <div className="navbar">
        
      <div className="up">
  <img src="../../../assets/Game-two (游戏).svg" alt="صورة في الأعلى" />
  </div>
 

        {/* ثلاث صور أسفل بعض */}
        <div className="centered-images">
          <img src="../../../assets/Like (喜欢).svg" alt="صورة 1" />
          <img src="../../../assets/Setting-two (设置).svg" alt="صورة 2" />
          <img src="../../../assets/Puzzle (拼图).svg" alt="صورة 3" />
        </div>

        {/* صورة أسفل الصفحة */}
        <div className="bottom-images">
        <div className="stacked-images">
        <img src="../../../assets/Moon (月亮).svg" alt="صورة أسفل الصفحة" />

        <img src="../../../assets/Sun-one (太阳1).svg" alt="صورة أسفل الصفحة" />
        </div>
        </div>

        <div className="vertical-line"></div>
      
      </div>
    </div>
  </>

  )
}

export default Navbar