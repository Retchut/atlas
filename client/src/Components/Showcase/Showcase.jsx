import React, { useState, useEffect } from 'react';
import Pathology from '../Pathology/Pathology.jsx';

function Showcase(props){
    const { category } = props;
    const [state, setState] = useState({ apiResponse : [], currentPathologyID : null });
    useEffect(() => {
        fetch(process.env.REACT_APP_SERVER_LOCATION)
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
        <div className="flex gap-2 w-full h-full max-w-screen-2xl">
            <div className="atlas-section min-w-max w-fit">
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
            <div className="atlas-section grow h-fit max-h-full overflow-scroll">
                {displayPathology()}
            </div>
        </div>
    );
}

export default Showcase;