import React from "react";
import PropTypes from "prop-types";

const Project = ({ project }) => {
    
    return (
        <>
            <li key={project}>{project.title}</li>
        </>
    )
}


Project.propTypes = {
    Projects: PropTypes.object.isRequired,
};

export default Project