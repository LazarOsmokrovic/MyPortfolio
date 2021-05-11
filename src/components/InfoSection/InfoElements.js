import styled from 'styled-components'

export const InfoContainer = styled.div`
    color: #fff;
    background:  ${({ lightBackground }) => ( lightBackground ? '#fefcfb' : '#010606')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    //padding: 0 24px;
    justify-content: center;

    @media screen and (max-width: 480px) {
        height: 1100px;
    }
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => ( imgStart ? `'col2 col1'` : `'col1 col2 '`)};

    @media screen and (max-width: 768px) {
        margin-bottom: 40px;
        grid-template-areas: ${({ imgStart }) => ( imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    //margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: #1282a2;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spasing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`


export const Subtitle = styled.p`
    max-width: 500px;
    font-size: 18px;
    line-height: 24px;
    text-align: justify;
    color: ${({ darkText }) => ( darkText ? '#010606' : '#fff')};
`

export const ImgWrap = styled.div`
    max-width: 500px;
    height: 500px;

    @media screen and (max-width: 768px) {
        max-width: 300px;
    }

    @media screen and (max-width: 350px) {
        max-width: 200px;
    }
`

export const Img = styled.img`
    width: 100%;
    border-radius: 50%;
    height: auto;
    object-fit: cover;
    max-height: 500px;
    margin: 0 0 10px 0;
    padding-right: 0;
    }
`