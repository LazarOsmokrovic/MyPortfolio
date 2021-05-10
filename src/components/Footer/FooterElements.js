import styled from 'styled-components'
import {Link as LinkScroll} from 'react-scroll'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
    background-color: #034078;
`

export const FooterWrapper = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;


    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const FooterLinksItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 800px) {
        align-items: center;
        maring: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinktitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`

export const FooterLinksRow = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
margin: 0 auto 0 auto;
text-align: left;
justify-content: space-between;
max-width: 800px;
box-sizing: border-box;
color: #fff;

@media screen and (max-width: 800px) {
    flex-direction: Column;
    align-items: flex-end;
    maring: 0;
    padding: 10px;
    width: 100%;
}
`

export const FooterLink = styled(LinkScroll)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    width: 100px;
    cursor: pointer;

    &:hover {
        color: #1282a2;
        transition: 0.3 ease-out;
    }
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-direction: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
    font-family: Train One;  
`

export const WebSiteRight = styled.small`
    color: #fff;
    margin-bottom: 16px;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 180px;
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;

    &:hover {
        transform: scale(1.06);
    }
`