import React from 'react';
import './navigationBar.css';
import Link from 'next/link';



const NavigationBar = () => {
    return (
        <div className='navigation-bar'>
            <div>
                <Link href="/">
                    <h1 className='store-name'>UDON!!!</h1>
                </Link>
            </div>
            <div className='store-list'>
                <Link href="/odakyu" >
                    <p className='store'>ODAKYU MACHIDA</p>
                </Link>
                <Link href="/aihara" >
                    <p className='store'>AIHARA</p>
                </Link>
                <Link href="/noduta" >
                    <p className='store'>NOTSUDA</p>
                </Link>
            </div>
        </div>
    );
};

export default NavigationBar;
