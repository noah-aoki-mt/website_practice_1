import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import styles from './menu.module.css'

const MenuPage = () => {
  return (
    <div className={styles.container}>
        <NavigationBar />
        <div className={styles.title}>
            MENU
        </div>
        <img src="/image/img_0547.jpg"  alt="Image" className={styles.image}/>
        <img src="/image/img_0549.jpg"  alt="Image" className={styles.image}/>
        <img src="/image/img_0551.jpg"  alt="Image" className={styles.image}/>
        <Footer />
    </div>
  )
}

export default MenuPage