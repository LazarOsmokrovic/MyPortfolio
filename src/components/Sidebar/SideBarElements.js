import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkScroll} from 'react-scroll'

export const SideBarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => ( isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => ( isOpen ? '0' : '-100%')};
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    sursor: pointer;
    outline: none;
` 

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const SideBarWrapper = styled.div`
    color: #fff;
`

export const SideBarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-wisth: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`

export const SideBarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    Justify-content: center;
    font-size: 1.5rem;
    font-decoration: none;
    list-style: none;
    transition: 0.2 ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #1282a2;
        transition: 0.2s ease-in-out;
    }
`

export const SideBarIconsWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarLinkedInLink = styled.a`
    //color: #0176b5;
    color: #1282a2;
    width: 40px;
    font-size: 32px;
    cursor: pointer;

    &:hover {
        transform: scale(1.06);
    }
`
export const SidebarInstagramLink = styled.a`
    font-size: 32px;
    cursor: pointer;
    width: 40px;
    color: #1282a2;

    &:hover {
        transform: scale(1.06);
    }
`