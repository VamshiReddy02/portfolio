import styles from './HeroStyles.module.css'
import heroImg from '../../assets/heroImg.jpg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
  const { theme, toggleTheme } = useTheme()

  const themeIcon = theme === 'light' ? sun : moon
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark
  const githubIcon = theme === 'light' ? githubLight : githubDark
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="profilePic" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="color mode"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Vamshi  Reddy
        </h1>
        <h2>Fullstack Developer</h2>
        <span>
          <a href="https://x.com/vamshireddy02" target="_blank">
            <img src={twitterIcon} alt="twitter icon" />
          </a>
          <a href="https://github.com/vamshireddy02" target="_blank">
            <img src={githubIcon} alt="github icon" />
          </a>
          <a href="https://www.linkedin.com/in/vamshireddy02/" target="_blank">
            <img src={linkedinIcon} alt="linkedin icon" />
          </a>
        </span>
        <a href={CV} target="_blank" rel="noopener noreferrer">
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  )
}

export default Hero
