import React from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import About from '../components/About'
import Contact from '../components/Contact'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import Projects from '../components/Projects'

const HomePage = () => {
    return (
        <>
            <Header />
            <Content />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default HomePage