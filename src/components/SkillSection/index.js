import React from 'react'
import {
    SkillContainer, 
    SkillWrapper, 
    SkillRow, 
    Column1, 
    Column2,  
    TopLine, 
    Subtitle,} from './SkillElements'
import ProgressBar from './ProgressBar'

const InfoSection = ({ 
    id, 
    col2Start, 
    topLine,   
    description1,
    description2,
    description3,
    description4,
    description5,
    description6,
    description7,
    description8,
    description9}) => {
    return (
        <SkillContainer id={id}>
            <SkillWrapper>
                <SkillRow col2Start={col2Start}>
                    <Column1>
                        <TopLine>{topLine}</TopLine>
                        <Subtitle>{description1}</Subtitle>
                        <ProgressBar done='55'/>
                        <Subtitle>{description2}</Subtitle>
                        <ProgressBar done='40'/>
                        <Subtitle>{description3}</Subtitle>
                        <ProgressBar done='50'/>
                        <Subtitle>{description4}</Subtitle>
                        <ProgressBar done='50'/>
                        <Subtitle>{description5}</Subtitle>
                        <ProgressBar done='40'/>
                    </Column1>
                    <Column2>
                        <Subtitle>{description6}</Subtitle>
                        <ProgressBar done='30'/>
                        <Subtitle>{description7}</Subtitle>
                        <ProgressBar done='70'/>
                        <Subtitle>{description8}</Subtitle>
                        <ProgressBar done='35'/>
                        <Subtitle>{description9}</Subtitle>
                        <ProgressBar done='70'/>
                    </Column2>
                </SkillRow>
            </SkillWrapper>
        </SkillContainer>
    )
}

export default InfoSection
