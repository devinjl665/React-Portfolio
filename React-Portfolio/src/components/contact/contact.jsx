import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./contact.module.css";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>I will respond as soon as I can!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailicon.png")} alt="email icon"/>
                    <a href="mailto:devinjl665@gmail.com">devinjl665@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubicon.png")} alt="github icon"/>
                    <a href="https://github.com/devinjl665">github.com/devinjl665</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedin.png")} alt="linkedin icon"/>
                    <a href="https://www.linkedin.com/in/devin-little-7115b1300">linkedin.com/devin-little</a>
                </li>
            </ul>
        </footer>
    );
};