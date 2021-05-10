import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import {
    ProjectContainer, 
    ProjectH1, 
    ProjectWrapper, 
    ProjectCard,
    ProjectLink, 
    ProjectIcon, 
    ProjectH2, 
    ProjectP} from './ProjectElemenets'

const ProjectsSection = () => {
    return (
        <ProjectContainer id='projects'>
            <ProjectH1>My Projects</ProjectH1>
            <ProjectWrapper>
                <ProjectCard>
                    <ProjectLink href='https://github.com/LazarOsmokrovic/Quiz_App' target='_blank'>
                    <ProjectIcon src={Icon1}/>
                    
                    <ProjectH2>Quiz app</ProjectH2>
                    <ProjectP>This is simple quiz created in flutter</ProjectP>
                    </ProjectLink>
                </ProjectCard>
                <ProjectCard>
                <ProjectLink href='https://github.com/LazarOsmokrovic/Personal_Expenses_App' target='_blank'>
                    <ProjectIcon src={Icon2}/>
                    <ProjectH2>Personal expenses app</ProjectH2>
                    <ProjectP>Flutter app for managing weekly spendings</ProjectP>
                    </ProjectLink>
                </ProjectCard>
                <ProjectCard>
                <ProjectLink href='https://github.com/LazarOsmokrovic/Meals_App' target='_blank'>
                    <ProjectIcon src={Icon3}/>
                    <ProjectH2>Recepite app</ProjectH2>
                    <ProjectP>flutter app with meals</ProjectP>
                    </ProjectLink>
                </ProjectCard>
            </ProjectWrapper>
        </ProjectContainer>
    )
}

export default ProjectsSection
