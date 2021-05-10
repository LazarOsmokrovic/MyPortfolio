import styled from 'styled-components'

export const ProjectContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 1000px) {
        height: 1100px;
    }

    @media screen and (max-width: 850px) {
        height: 1400px;
    }


    @media screen and (max-width: 650px) {
        height: 1500px;
    }
`

export const ProjectWrapper = styled.div`
    max-width: 1100;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 25px;
    //padding:  50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ProjectCard = styled.div`
    background: #fff;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.03);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ProjectLink = styled.a`
    display: flex;
    align-items: center;
    border-radius: 10px;
    max-width: 300px;
    max-height: 340px;
    padding: 30px;
    flex-direction: column;
    justify-content: flex-start;
    text-decoration: none;
    color: #000;
`

export const ProjectIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const ProjectH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const ProjectH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ProjectP = styled.p`
    font-size: 1rem;
    text-align: center;
`





