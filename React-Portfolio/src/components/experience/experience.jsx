import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./experience.module.css";

export const Experience = () => {
    return (
        <section>
            <h2>Experience</h2>
            <div>
            <ul>
                <li>
                    <img src={getImageUrl("skills/htmlicon.png")} alt="html icon"/>
                    <div>
                        <h3>HTML</h3>
                    </div>
                </li>
                <li>
                    <img src={getImageUrl("skills/cssicon.png")} alt="css icon"/>
                    <div>
                        <h3>CSS</h3>
                    </div>
                </li>
                <li>
                    <img src={getImageUrl("skills/javascript-logo.png")} alt="javascript icon"/>
                    <div>
                        <h3>JavaScript</h3>
                    </div>
                </li>
                <li>
                    <img src={getImageUrl("skills/reacticon.png")} alt="react icon"/>
                    <div>
                        <h3>React</h3>
                    </div>
                </li>
                <li>
                    <img src={getImageUrl("skills/nodeicon.png")} alt="node icon"/>
                    <div>
                        <h3>Node</h3>
                    </div>
                </li>
                <li>
                    <img src={getImageUrl("skills/mysql-logo-1.png")} alt="mysql icon"/>
                    <div>
                        <h3>MySQL</h3>
                    </div>
                </li>
                <li>
                    <img src={getImageUrl("skills/mongoicon.png")} alt="mongodb icon"/>
                    <div>
                        <h3>MongoDB</h3>
                    </div>
                </li>
            </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <img src={getImageUrl("history/washulogo.png")} alt="Wash U emblem"/>
                        <h3>Coding Bootcamp, Wash University in Saint Louis</h3>
                        <p>Sept 2023 - Mar 2024</p>
                        <li>A rigorous, fast paced bootcamp that took 24 weeks to complete.</li>
                        <li>Completed multiple projects that display the job-ready skills taught in the course.</li>
                    </li>
                </ul>
            </div>
        </section>
    );
};