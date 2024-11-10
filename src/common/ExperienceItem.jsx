import React from 'react'
import styles from './ExperienceItemStyles.module.css'

const ExperienceItem = ({ title, company, duration, description, tags }) => {
  return (
    <div className={styles.experienceItem}>
      <div className={styles.duration}>{duration}</div>
      <div className={styles.details}>
        <h3 className={styles.title}>
          {title} - <span className={styles.company}>{company}</span>
        </h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExperienceItem
