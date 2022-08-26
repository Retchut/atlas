import React, { useState, useEffect } from 'react';
import Pathology from '../../Components/Pathology/Pathology.jsx';
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
            return (<h1 className="my-5 text-5xl text-center">Please select an image on the menu to the left</h1>);
        }

        const pathology = state.apiResponse.find((item) => item._id === state.currentPathologyID);
        if(typeof pathology == "undefined"){
            return (<h1 className="my-5 text-5xl text-center">Error fetching pathology.</h1>);
        }
        else{
            return (<Pathology pathologyData={pathology}></Pathology>);
        }
    }

    return(
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="gap-2 w-2/3 h-screen3/4 auto-cols-max flex">
                {/* pathology selector */}
                <div className="atlas-section min-w-max w-fit flex justify-center">
                    <div>
                        {state.apiResponse.map((pathology, index) => (
                            <img
                                className="max-w-pathology-thumbnail m-4 rounded-lg cursor-pointer"
                                src={process.env.REACT_APP_SERVER_STORAGE_DIR + pathology.imageHash}
                                alt={pathology.name + '-thumb'}
                                onClick={() => handlePathologyClick(pathology._id)}
                                key={'pathology-thumb-' + index}>
                            </img>))
                        }
                    </div>
                </div>
                {/* pathology showcase */}
                <div className="atlas-section h-fit max-h-full grow">
                    {displayPathology()}
                </div>
            </div>
        </div>
    );
}

export default Atlas;