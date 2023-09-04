import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterShop() {
  return (
    <div>       
      <ul>
      <li><Link to="/new">New</Link></li>
        <li><Link to="/products">All Jewellry</Link></li>
        <li><Link to="/favorites">Our Favorites</Link></li>          
        <li><Link to="/sale">Sale</Link></li>          
      </ul>
    </div>
  )
}

