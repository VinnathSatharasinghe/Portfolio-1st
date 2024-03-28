import React, { useState } from 'react'
import './Header.css'
import logo from '../pic/logo2.png'

// import protfolio from '../portfolio/protfolio'



const Header = () => {
  //scroll header at top

  // window.addEventListener("scroll", function () {
  //   const header = document.querySelector(".header")
  //   header.classList.toggle("active", window.scrollY > 100)
  // })

//toggle menu
const [Mobile, setMobile] = useState(false)


  return (
    <div>
      
      <header className='header'>
        
        <div className='container d_flex'>
            <div className='logo'>
              <img src={logo} alt='' />
            </div>

            <div className='navlink'>
              {/* <ul className='link f_flex uppercase'> */}
                <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)} >


                
  

                <li><button className='home-btn' ><a href="#home">Home</a></button></li>
                <li><button className='home-btn'><a href="#Features">FEATURES</a></button></li>
                <li><button className='home-btn'><a href="#resume">RESUME</a></button></li>
                <li><button className='home-btn'><a href="#Features">BLOG</a></button></li>
                <li><button className='home-btn'><a href="#contact">CONTENT</a></button></li>
                <li><button className='home-btn'>INFORMATION</button></li>
                
              </ul>
              

              {/* side bar */}

              <button className='toggle' onClick={() => setMobile(!Mobile)}>
                {Mobile ? <i className='fa-solid fa-bars fa-beat-fade close home-btn'></i> : <i className='fa-solid fa-bars fa-beat-fade open'></i> }
                

                
              </button>
              
            </div> 
         </div>

        
      </header>

      <section className='demo'></section>

      


    </div>
    
  )

  
}

export default Header
