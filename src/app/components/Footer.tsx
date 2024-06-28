import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h4>店舗情報</h4>
                    <p>〒123-4567 東京都町田市相原町1-2-3</p>
                    <p>TEL: 012-3456-7890</p>
                    <p>Email: kaito.aihara@example.com</p>
                </div>
                <div className="footer-column">
                    <ul>
                        <li><a href="/">ホーム</a></li>
                        <li><a href="/menu">メニュー</a></li>
                        <li><a href="/about">会社概要</a></li>
                        <li><a href="/contact">お問い合わせ</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <ul>
                        <li><a href="https://www.instagram.com/udonyakaitoaihara/">Instagram</a></li>
                        <li><a href="https://x.com/i/flow/login?redirect_after_login=%2Fudonyakaito">X</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 かいと. All Rights Reserved.</p>
            </div>
        </footer>
    );
};


export default Footer