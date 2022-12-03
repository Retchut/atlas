import React from 'react';

function Pathology(props){
    const { pathologyData } = props;
    return (
        <div className="m-5 text-center break-words">
            <h1 className="text-5xl">{pathologyData.name}</h1>
            <div className="flex justify-center">
                <img
                    className="mt-4 mb-3"
                    src={process.env.REACT_APP_SERVER_LOCATION + 'storage/' + pathologyData.imageHash}
                    alt={pathologyData.name + '-thumb'}
                ></img>
            </div>
            <p>{pathologyData.description}</p>
        </div>
    );
}

export default Pathology;