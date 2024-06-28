import React from 'react';
import styles from './Body.module.css';

export const Body = () => {
    return (
        <div className={styles.container}>
            <img src="/image/img_0553.png" alt="Image" className={styles.image} />
            <div className={styles.title}>
                <h2>
                    This is UDON SHOP in Machida Tokyo
                </h2>
            </div>
                <div className={styles.text}>
                    <p>Thank you for coming this Page !!!</p>
                    <p>This is a udon shop </p>
                    <p>We make really tastey Udon & We Love it</p>
                    <p>Please come here and eat our dish ★</p>
                </div>
        </div>
    );
};