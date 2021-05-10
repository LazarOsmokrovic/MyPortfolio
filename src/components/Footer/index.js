import React from 'react'
import {FaLinkedin, FaInstagram, FaFacebook} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import {
    FooterContainer, 
    FooterWrapper, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinksItems, 
    FooterLinktitle,
    FooterLinksRow, 
    FooterLink, 
    SocialMedia, 
    SocialMediaWrapper, 
    SocialLogo, 
    WebSiteRight, 
    SocialIcons, 
    SocialIconLink} from './FooterElements'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
      }

    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinktitle>Navigation</FooterLinktitle>
                            <FooterLinksRow>
                            <FooterLink to='aboutMe' smooth={true} duration={500} spy={true} exact='true' offset={-80}>AboutMe</FooterLink>
                            <FooterLink to='skill' smooth={true} duration={500} spy={true} exact='true' offset={-80}>My skills</FooterLink>
                            <FooterLink to='projects' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</FooterLink>
                            <FooterLink to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80}>contact</FooterLink>
                            </FooterLinksRow>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrapper>
                        <SocialLogo to='/' onClick={toggleHome}>Portfolio</SocialLogo>
                        <WebSiteRight>created by Lazar Osmokrovic {new Date().getFullYear()}</WebSiteRight>
                        <SocialIcons>
                            <SocialIconLink href="https://www.linkedin.com/in/lazar-osmokrovic-4b8a611b7/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/lazarosmokrovic/" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.facebook.com/lazar.osmokrovic/" target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrapper>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
