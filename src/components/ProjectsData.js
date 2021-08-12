import waarheid from './img/blog1.svg';
import yessica from '../assets/img/yessica.svg';
import down from './img/blog3.svg';
import paranormal from './img/blog4.svg';
import dog from './img/blog3.svg';
import kiskizu from './img/blog4.svg';
import cat from '../assets/img /cat.svg';

import React, { useState } from "react";
import PropTypes from "prop-types";
import Projects from "./Projects";


const ProjectsDatas =[ 
    {
        id: 1,
        image: cat,
        title: 'Let the cat out of the bag',
        category: 'Development',
        challenge: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ea, ab aperiam necessitatibus adipisci sunt facilis itaque non enim est!'
    },
    {
        id: 2,
        image: yessica,
        title: 'Yessica',
        category: 'Design',
        challenge: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ea, ab aperiam necessitatibus adipisci sunt facilis itaque non enim est!'
    },
    {
        id: 3,
        image: waarheid,
        title: 'De waarheid aan het licht',
        category: 'Design',
        sub: ['concept', 'branding'],
        challenge: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ea, ab aperiam necessitatibus adipisci sunt facilis itaque non enim est!'
    },
    {
        id: 4,
        image: down,
        title: 'Down syndrome day',
        category: 'Design',
        challenge: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ea, ab aperiam necessitatibus adipisci sunt facilis itaque non enim est!'
    },
    {
        id: 5,
        image: paranormal,
        title: 'Dollmove',
        category: 'Design',
        challenge: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ea, ab aperiam necessitatibus adipisci sunt facilis itaque non enim est!'
    },
    {
        id: 6,
        image: dog,
        title: 'Petled',
        category: 'Design',
        challenge: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ea, ab aperiam necessitatibus adipisci sunt facilis itaque non enim est!'
    },
    {
        id: 7,
        image: kiskizu,
        title: 'Kiskizu',
        category: ['Desgign', 'Development', 'Research'],
        challenge: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ea, ab aperiam necessitatibus adipisci sunt facilis itaque non enim est!'
    }
];


const ProjectsData = () => {
    const [projects, setProjects] = useState(ProjectsDatas)
    
    return (
        <section >
            <h3>Some projects</h3>
            <ul>
                {projects.map((project) => <Projects project={project} key={project.id} />)}
            </ul>
        </section>
    )
}
ProjectsData.propTypes = {
    list: PropTypes.array,
};
export default ProjectsData