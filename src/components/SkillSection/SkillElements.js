import styled from 'styled-components'

export const SkillContainer = styled.div`
    color: #fff;
    background: #fefcfb;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const SkillWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 0px;
    justify-content: center;
    align-items: center;
`

export const SkillRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ col2Start }) => ( col2Start ? `'col2 col1'` : `'col1 col2 '`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ col2Start }) => ( col2Start ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TopLine = styled.p`
    color: #1282a2;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spasing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 20px;
`


export const Subtitle = styled.p`
    max-width: 500px;
    margin-bottom: 25px;
    margin-top: 25px;
    font-size: 18px;
    line-height: 24px;
    text-align: justify;
    color: #010606;
`

export const Progress = styled.div`
    background-color: #000;
    border-radius: 50px;
    height: 10px;
    width: 300px;
`

export const ProgressDone = styled.div`
    background: linear-gradient(to left, #1282a2, #001f54);
    border-radius: 20px;
    height: 100%;
    width: 0;
    transition: width 1s ease-in-out;
`