import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import styles from './about.module.css'

const AboutPage = () => {
  return (
    <div className={styles.container}>
        <NavigationBar />
        <div>ABOUT</div>
        <p>～～～～～～～</p>
        <Footer />
    </div>
  )
}

export default AboutPage;