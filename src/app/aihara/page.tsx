import React from 'react'
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import styles from './aihara.module.css';

const AiharaPage = () => {
    return (
        <div className={styles.contaier}>
            <NavigationBar />
            <div className={styles.title}>
                <h2>AIHARA</h2>
            </div>
            <img src="/image/img_0555.png" alt="Image" className={styles.image} />
            <img src="/image/img_0556.png" alt="Image" className={styles.imagefirst} />
            <Footer />
        </div>
    )
}

export default AiharaPage;