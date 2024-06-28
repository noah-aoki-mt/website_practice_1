import React from 'react'
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import styles from './odakyu.module.css'

const OdakyuPage = () => {
    return (
        <div className={styles.contaier}>
            <NavigationBar />
            <div className={styles.title}>
                <h2>ODAKYU MACHIDA</h2>
            </div>
            <img src="/image/img_0554.png" alt="Image" className={styles.image} />
            <div className={styles.text}>
                <p>Welcome to "Sanuki Udon KAITO "!!! where we pride ourselves on serving the finest Sanuki udon noodles this side of Japan. Nestled in the heart of a bustling city, our udon shop brings the authentic taste of Kagawa Prefecture to every bowl.
                    Our cozy ambiance and warm hospitality ensure that every visit to Sanuki Udon KAITO is a delightful culinary journey. Whether you're here for a quick lunch or a relaxing dinner, let us transport you to the heart of Sanuki, where the art of udon-making meets exceptional taste.
                    Come experience the authentic flavors of Sanuki udon at Sanuki Udon House. Your taste buds will thank you.
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default OdakyuPage;