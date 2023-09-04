import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterAbout() {
  return (
    <div>       
      <ul>
      <li><Link to="/about">Our Story</Link></li>
        <li><Link to="/contact">Contact US</Link></li>
        <li><Link to="/stores">Store</Link></li>
        <li><Link to="/careers">Careers</Link></li>   
      </ul>
    </div>
  )
}
