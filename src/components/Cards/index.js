import './index.scss';
import { projectData } from '../../assets/data/projects';

const Cards = () => {
    return (
        <>
            <div className="project-container">
                {projectData.map((data, key) => {
                    return (
                        <div key={key} className="card-container">
                            <div className="card-header">{data.name}</div>
                            <div className="card-image">
                                {data.image}
                            </div>
                            <div className="card-description">{data.description}</div>
                            <div className="card-bubble-container">
                                {data.bubbles.map(data => (
                                    <div className="card-bubble">{data}</div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default Cards