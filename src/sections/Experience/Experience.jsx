import React from 'react'
import ExperienceItem from '../../common/ExperienceItem'
import styles from './ExperienceStyles.module.css'
import { useTheme } from '../../common/ThemeContext'

const Experience = () => {
  const { theme } = useTheme()

  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Fermyon',
      duration: "June'24 - Aug'24",
      description:
        'Redesigned the whole Spin hub page and added deploy this button. Worked on a spin plugin where clients can install templates from the spin hub via CLI. Helped in Organizing the summer of spin for the Fermyon community.',
      tags: ['JavaScript', 'Vue.js', 'Node.js', 'Rust'],
    },
    {
      title: 'DevRel Intern',
      company: 'Data on Kubernetes',
      duration: "Jan'23 - Apr'2023",
      description:
        'Content creation related to the Dok research report. Event organization for Dok explorers day. Learning many things like how a community is run and how to interact with people in an effective manner. Attending and giving talks at conferences, events and meetups as a representative of the community.',
      tags: ['Kubernetes', 'Public Speaking', 'Vue.js', 'Content Creation'],
    },
  ]

  return (
    <section
      id="experiences"
      className={`${styles.container} ${
        theme === 'dark' ? styles.containerDark : ''
      }`}
    >
      <h1 className={styles.sectionTitle}>Experience</h1>
      <div className={styles.experiencesContainer}>
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </section>
  )
}

export default Experience
