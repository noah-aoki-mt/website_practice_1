"use client"
import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import styles from './contact.module.css';
import { useState } from 'react';

const ContactPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [num, setNum] = useState("");
    const [date, setDate] = useState("");
    const [content, setContent] = useState("");
    const [formData, setFormData] = useState<{ name: string; email: string; num: string; date: string; content: string; }[]>([]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const formDataObject = { name, email, num, date, content };
        setFormData([...formData, formDataObject]);

        console.log(formData); // formData をコンソール出力
        
        setName("");
        setEmail("");
        setNum("");
        setDate("");
        setContent("");
    }

    return (
        <div className={styles.container}>
        <NavigationBar />
            <div className="container">
                <form className="form" onSubmit={handleSubmit}>
                    <ul className="formGroup">
                        <li>
                            <label>氏名</label>
                        </li>
                        <li>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </li>
                        <li>
                            <label>E-mailアドレス</label>
                        </li>
                        <li>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </li>
                        <li>
                            <label>電話番号</label>
                        </li>
                        <li>
                            <input type="text" value={num} onChange={(e) => setNum(e.target.value)} />
                        </li>
                        <li>
                            <label>お問い合わせ日時</label>
                        </li>
                        <li>
                            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                        </li>
                        <li>
                            <label>お問い合わせ内容</label>
                        </li>
                        <li>
                            <textarea value={content} onChange={(e) => setContent(e.target.value)} />
                        </li>
                        <li>
                            <button type="submit">
                                送信
                            </button>
                        </li>
                    </ul>
                </form>
            </div>
            <Footer />
        </div>
    );
};
export default ContactPage;