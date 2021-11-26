import React from 'react'
import { Button } from 'semantic-ui-react'

import './Header.css'
function Header() {

  return (
    <section className='header'>
    <span onClick={() => window.scroll(0, 0)} className="header">
     <img className='headerlogo' src="http://1.bp.blogspot.com/-ty9NJBAITnY/TjjMmtkUDHI/AAAAAAAAB28/k6QxiNVeOVs/s500/Cinemax+logo+2011b.png" alt="" />
       </span>
     
    </section>
  )
}

export default Header
