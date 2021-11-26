import React from 'react'


import './LoginHeader.css'
function Header() {

  return (
    <section className='header'>
    <span onClick={() => window.scroll(0, 0)} className="header">
       🎬 Entertainment Hub 
    
       </span>
     
    </section>
  )
}

export default Header