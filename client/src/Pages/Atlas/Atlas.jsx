import React, { useState, useEffect } from 'react';
import './Atlas.css';

function Atlas(){
    const [state, setState] = useState({ apiResponse : [], currentPathologyID : null });
    useEffect(() => {
        fetch("http://localhost:9000/atlas")
            .then(res => res.json())
            .then(resData => setState({ apiResponse: resData, currentPathologyID : null }))
            .catch();
    }, []);

    function handlePathologyClick(pathologyID){
        setState({
            apiResponse : state.apiResponse,
            currentPathologyID : pathologyID
        });
    }

    function displayPathology(){
        if(state.currentPathologyID === null){
            return (<h1>Please select a pathology on the menu to the left</h1>);
        }

        const pathology = state.apiResponse.find((item) => item._id === state.currentPathologyID);
        if(typeof pathology == "undefined"){
            return (<h1>Error fetching pathology.</h1>);
        }
        else{
            return (
                <div>
                    <p>{pathology.name}</p>
                    <p>{pathology.description}</p>
                    <img
                        className="m-2 rounded-lg"
                        src={process.env.REACT_APP_SERVER_STORAGE_DIR + pathology.imageHash}
                        alt={pathology.name + '-thumb'}
                    ></img>
                </div>
            );
        }
    }

    return(
        <div className="atlas-page">
            <div className="h-screen w-screen flex justify-center items-center">
                <div className="grid grid-cols-7 gap-2 w-2/3 h-screen3/4">
                    {/* pathology selector */}
                    <div className="col-span-1 bg-theme2-blue-light rounded-lg overflow-auto flex justify-center">
                        <div className="">
                            {state.apiResponse.map((pathology, index) => (
                                <img
                                    className="m-2 rounded-lg cursor-pointer"
                                    src={process.env.REACT_APP_SERVER_STORAGE_DIR + pathology.imageHash}
                                    alt={pathology.name + '-thumb'}
                                    onClick={() => handlePathologyClick(pathology._id)}
                                    key={'pathology-thumb-' + index}>
                                </img>))
                            }
                        </div>
                    </div>
                    {/* pathology showcase */}
                    <div className="col-span-6 bg-theme2-blue-light rounded-lg overflow-auto">
                        {displayPathology()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Atlas;