import React, { useState } from 'react'
import styles from './HeaderStyles.module.css'
import { useTheme } from '../../common/ThemeContext'

function Header() {
  const { theme, toggleTheme } = useTheme()
  const [activeItem, setActiveItem] = useState('home')

  const handleClick = (item) => {
    setActiveItem(item)
  }

  return (
    <header
      className={`${styles.header} ${
        theme === 'light' ? styles.lightHeader : ''
      }`}
    >
      <nav className={styles.navbar}>
        <a
          href="#"
          className={`${styles.navItem} ${
            activeItem === 'home' ? styles.active : ''
          } ${theme === 'light' ? styles.lightText : ''}`}
          onClick={() => handleClick('home')}
        >
          Home
        </a>
        <a
          href="#experiences"
          className={`${styles.navItem} ${
            activeItem === 'experiences' ? styles.active : ''
          } ${theme === 'light' ? styles.lightText : ''}`}
          onClick={() => handleClick('experiences')}
        >
          Experiences
        </a>
        <a
          href="#projects"
          className={`${styles.navItem} ${
            activeItem === 'projects' ? styles.active : ''
          } ${theme === 'light' ? styles.lightText : ''}`}
          onClick={() => handleClick('projects')}
        >
          Projects
        </a>
        <a
          href="#skills"
          className={`${styles.navItem} ${
            activeItem === 'skills' ? styles.active : ''
          } ${theme === 'light' ? styles.lightText : ''}`}
          onClick={() => handleClick('skills')}
        >
          Skills
        </a>
      </nav>
    </header>
  )
}

export default Header
