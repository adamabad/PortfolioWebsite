import './index.scss';
import { projectData } from '../../assets/data/projects';


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/));


const Cards = () => {
    return (
        <>
            <div className="project-container">
                {projectData.map((data, key) => {
                    return (
                        <div key={key} className="card-container">
                            <a href={data.link} target="_blank" className="fill-div"></a>
                            <div className="card-header">{data.name}</div>
                            <div className="card-image">
                                <img src={images[data.image]} alt=""></img>
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