import React from 'react'
import {
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Subtitle,  
    ImgWrap, 
    Img,} from './InfoElements'

const InfoSection = ({
    lightBackground, 
    id, 
    imgStart, 
    topLine,   
    darkText, 
    description1,
    description2,
    description3,
    description4,
    description5,
    description6,
    description7,
    description8,   
    alt, 
    image,}) => {
    return (
        <InfoContainer lightBackground={lightBackground} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Subtitle darkText={darkText}>{description1}<br></br>
                        {description2}<br></br>
                        {description3}<br></br>
                        {description4}<br></br>
                        {description5}<br></br>
                        {description6}<br></br>
                        {description7}<br></br> 
                        {description8}</Subtitle>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={image} alt={alt}></Img>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default InfoSection
