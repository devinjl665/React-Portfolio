import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./about.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                    src={getImageUrl("about/softwareDev.png")} 
                    alt="Image of a software developer" 
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" className={styles.iconImage}/>
                        <div className={styles.aboutItemText}>
                            <h3>Front-end Developer</h3>
                            <p>I am a skilled front-end developer able to use HTML, CSS, and JavaScript to build SEO friendly websites.</p>
                        </div>
                    </li>
                    
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/database.png")} alt="database icon" className={styles.iconImage}/>
                        <div className={styles.aboutItemText}>
                            <h3>Back-end Developer</h3>
                            <p>I enjoy building baSck-end systems using/creating APIs. Profiecient in using technologies such as (but not limited to), MySQL, MongoDB, and Node.js.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/webpage.png")} alt="webpage icon" className={styles.iconImage}/>
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>I am also able to create polished UI's using CSS frameworks and design tools like Bootstrap, Tailwind, and Figma.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

