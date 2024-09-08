import React from "react";

import projects from "../../data/projects.json";

import { ProjectsCard } from "./projectsCard";

import styles from "./projects.module.css";


export const Projects = () => {
    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {
                    projects.map((project, id) => {
                        return (
                            <ProjectsCard key={id} project={project} />
                        
                    )})
                }
            </div>
        </section>
    );
};