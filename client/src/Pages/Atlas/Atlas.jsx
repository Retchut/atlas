import React, { useState, useEffect } from 'react';

function Atlas(){
    const [state, setState] = useState({ apiResponse : [] });
    useEffect(() => {
        fetch("http://localhost:9000/atlas")
            .then(res => res.json())
            .then(resData => setState({ apiResponse: resData }))
            .catch();
    }, []);

    return(
        <div className="atlas-page">
            <div className="h-screen w-screen flex justify-center items-center">
                <div className="grid grid-cols-5 gap-2 w-2/3 h-screen3/4">
                    <div className="col-span-1 bg-theme2-blue-light rounded-lg">
                        <p>thumbnails</p>:
                        {state.apiResponse.map((pathology) => (<img src={process.env.REACT_APP_SERVER_STORAGE_DIR + pathology.imageHash}></img>))}
                    </div>
                    <div className="col-span-4 bg-theme2-blue-light rounded-lg">
                        <p>All the pathologies in the database:</p>
                        {state.apiResponse.map((pathology) => {
                            return (
                                <div>
                                    <p>{pathology.name}</p>
                                    <p>{pathology.description}</p>
                                    <p>{pathology.imageHash}</p>
                                </div>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Atlas;