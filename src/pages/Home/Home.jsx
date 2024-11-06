import { useState, useEffect, useRef } from "react"
import { Element } from "react-scroll"
import Banner from "../../components/Banner/Banner"
import Navbar from "../../components/Navbar/Navbar"
import Introduction from "../../components/Introduction/Introduction"
import Creations from "../../components/Creations/Creations"
import Skills from "../../components/Skills/Skills"
import Education from "../../components/Education/Education"
import Contact from "../../components/Contact/Contact"
import "./Home.scss"

export default function Home() {
  const [activeSection, setActiveSection] = useState("")
  const sectionRefs = useRef({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    Object.values(sectionRefs.current).forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section id="home" ref={(el) => (sectionRefs.current.home = el)}>
        <Banner />
      </section>
      <main>
        <section className="section__navbar">
          <Navbar activeSection={activeSection} />
        </section>
        <section
          className="__section"
          id="introduction"
          ref={(el) => (sectionRefs.current.introduction = el)}
        >
          <Introduction />
        </section>
        <section
          className="__section"
          id="creations"
          ref={(el) => (sectionRefs.current.creations = el)}
        >
          <Creations />
        </section>
        <section
          className="__section"
          id="skills"
          ref={(el) => (sectionRefs.current.skills = el)}
        >
          <Skills />
        </section>
        <section
          className="__section"
          id="education"
          ref={(el) => (sectionRefs.current.education = el)}
        >
          <Education />
        </section>
        <Element name="contact" id="contact">
          <section
            className="__section"
            id="contact"
            ref={(el) => (sectionRefs.current.contact = el)}
          >
            <Contact />
          </section>
        </Element>
      </main>
    </>
  )
}
