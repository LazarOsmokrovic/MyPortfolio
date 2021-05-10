import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElement'
import {
    WelcomeContainer, 
    WelcomeBackground, 
    VideoBackground, 
    WelcomeContent, 
    WelcomeH1, 
    WelcomeP, 
    WelcomeButtonWrapper, 
    ArrowForward, 
    ArrowRight} from './WelcomeElements'

const WelcomeSection = () => {
const [hover, setHover] = useState(false)

const onHover = () => {
    setHover(!hover)
}

    return (
        <WelcomeContainer>
            <WelcomeBackground>
                <VideoBackground autoPlay loop muted src={Video} type='video.mp4'></VideoBackground>
            </WelcomeBackground>
            <WelcomeContent>
                <WelcomeH1>Welcome to my portfolio website</WelcomeH1>
                <WelcomeP>Download my CV here</WelcomeP>
                <WelcomeButtonWrapper>   
                    <Button 
                            onMouseEnter={onHover} 
                            onMouseLeave={onHover} 
                            primary='true' 
                            dark='true' 
                            href={"/Lazar_Osmokrovic_CV.pdf"} 
                            download="Lazar_Osmokrovic_CV.pdf">CV {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </WelcomeButtonWrapper>
            </WelcomeContent>
        </WelcomeContainer>
    )
}

export default WelcomeSection