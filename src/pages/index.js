import React, {useState} from 'react'
import InfoSection from '../components/InfoSection'
import { AboutMeObject, SkillObject, ContactObject } from '../components/InfoSection/Data'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProjectsSection from '../components/ProjectsSection'
import SideBar from '../components/Sidebar'
import WelcomeSection from '../components/WelcomeSection'
import ContactSection from '../components/ContactSection'
import SkillSection from '../components/SkillSection'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <WelcomeSection/>
            <InfoSection {...AboutMeObject}/>
            <SkillSection {...SkillObject}/>
            <ProjectsSection/>
            <ContactSection {...ContactObject}/>
            <Footer/>
        </>
    )
}

export default Home
