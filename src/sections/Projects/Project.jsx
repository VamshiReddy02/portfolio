import styles from './ProjectStyles.module.css'
import viberr from '../../assets/fermyon.png'
import freshBurger from '../../assets/cleaning.jpg'
import hipsster from '../../assets/college.jpg'
import fitLift from '../../assets/wordle.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/fermyon/developer/pulls?q=is%3Apr+author%3AVamshiReddy02+is%3Aclosed"
          h3="Fermyon"
          p="Contribution"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/VamshiReddy02/streetGuard"
          h3="Street Guard"
          p="Urban Issue Reporting App"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/VamshiReddy02/college-portal"
          h3="College Portal"
          p="Dashboard"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/VamshiReddy02/wordle-game"
          h3="Wordle"
          p="By spin and wasm"
        />
      </div>
    </section>
  )
}

export default Projects
