import React from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Projects from '../components/Projects'

import SkillSet from '../components/SkillSet'

const HomePage = () => {
    return (
        <>
            <Header />
            <Content />
            <About />
            <SkillSet />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default HomePage