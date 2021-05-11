import React from 'react'
import {FaLinkedin, FaInstagramSquare} from 'react-icons/fa'
import {
    SideBarContainer, 
    Icon, 
    CloseIcon, 
    SideBarWrapper, 
    SideBarMenu, 
    SideBarLink, 
    SideBarIconsWrap, 
    SidebarLinkedInLink,
    SidebarInstagramLink} from './SideBarElements'

const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to='aboutMe' onClick={toggle}>About me</SideBarLink>
                    <SideBarLink to='skill' onClick={toggle}>My Skills</SideBarLink>
                    <SideBarLink to='projects' onClick={toggle}>Projects</SideBarLink>
                    <SideBarLink to='contact' onClick={toggle}>Contact</SideBarLink>
                </SideBarMenu>
                <SideBarIconsWrap>
                        <SidebarLinkedInLink href='https://www.linkedin.com/in/lazar-osmokrovic-4b8a611b7/' target='_blank'>
                            <FaLinkedin/>
                        </SidebarLinkedInLink>
                        <SidebarInstagramLink href='https://www.instagram.com/lazarosmokrovic/' target='_blank'>
                            <FaInstagramSquare/>
                        </SidebarInstagramLink> 
                </SideBarIconsWrap> 
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
