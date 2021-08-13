
import { useParams } from "react-router-dom";
import useFetch from "../components/UseFetch";

const ProjectDetails = () => {
    const { id } = useParams();
    const { data: project, error, isPending } = useFetch('http://localhost:3000/projects/' + id);

    return (
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {project && (
                <article>
                    <h2>{project.title}</h2>
                    <p>Written by {project.challenge}</p>
                </article>
            )}
        </div>
    );
}

export default ProjectDetails;