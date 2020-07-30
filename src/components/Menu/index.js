import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import Button from '../Button'
//import ButtonLink from './components/ButtonLink'

function Menu (){
   return (
      // <header>
      <nav className="Menu"> 
         <Link to="/">
         <img className="Logo" src={Logo} alt="LusccasFlix logo"/>
         </Link>

         <Button as={Link} className="ButtonLink" to="/cadastro/video">
            Novo vídeo
         </Button>
      </nav> // </header>
   )
}

export default Menu //belezinha