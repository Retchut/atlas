function Pathology(props){
    const { pathologyData } = props;
    return (
        <div>
            <h1>{pathologyData.name}</h1>
            <p>{pathologyData.description}</p>
            <img
                className="m-2"
                src={process.env.REACT_APP_SERVER_STORAGE_DIR + pathologyData.imageHash}
                alt={pathologyData.name + '-thumb'}
            ></img>
        </div>
    );
}

export default Pathology;