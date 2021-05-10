import React, {useState, useEffect} from 'react'
import { FaBars, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import {
  Nav,
  NavbarContainer, 
  Navlogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLink,  
  NavIcons,
  NavLinkedInLink,
  NavInstagramLink} from './NavbarElements'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
      if(window.scrollY >= 700) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    }

    useEffect (() => {
      window.addEventListener('scroll', changeNav)
    }, []); 

    const toggleHome = () => {
      scroll.scrollToTop();
    }

    return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <Navlogo to='/' onClick={toggleHome}>Portfolio</Navlogo>
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to='aboutMe' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='skill' smooth={true} duration={500} spy={true} exact='true' offset={-80}>My skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='projects' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact</NavLink>
            </NavItem>
          </NavMenu>
          <NavIcons>
            <NavLinkedInLink href='https://www.linkedin.com/in/lazar-osmokrovic-4b8a611b7/' target='_blank'>
              <FaLinkedin/>
            </NavLinkedInLink>
            <NavInstagramLink href='https://www.instagram.com/lazarosmokrovic/' target='_blank'>
              <FaInstagramSquare/>
            </NavInstagramLink>
          </NavIcons>
        </NavbarContainer>
      </Nav>
    </>
    )
}

export default Navbar;
