import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Devin Little</h1>
                <p className={styles.description}>I'm a self-driven junior full stack developer that easily adapts to different challenges thrown their way. Specializing in HTML5, CSS, JavaScript, MySQL, and MongoDB. Looking to be a team member for a company that wants to lead in innovation in their respective field.
                </p>
                <a href="mailto:devinjl665@gmail.com" className={styles.btn}>Contact Me</a>
                <a href="" className={styles.btn}>Resume</a>
            </div>
            <img src={getImageUrl("hero/Devin.png")} alt="Image of Devin Little" className={styles.heroImg}/>
                <div className={styles.topBlur} />
                <div className={styles.bottomBlur} />
        </section>
    );
};