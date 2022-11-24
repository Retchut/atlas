import React, { useState, useEffect } from 'react';
import Pathology from '../Pathology/Pathology.jsx';
import { categoryMap } from '../../Data/CategoryMap.js';

function Showcase(props){
    const { category } = props;
    const [ state, setState ] = useState({ apiResponse : [] });
    const [ currentPathologyID, setCurrentPathologyID ] = useState(null);

    useEffect(() => {
        fetch(process.env.REACT_APP_SERVER_LOCATION + '/' + categoryMap[category])
            .then(res => res.json())
            .then(resData => setState({ apiResponse: resData })).then(console.log(state.apiResponse))
            .catch();
    }, [state]);

    function handlePathologyClick(pathologyID){
        setCurrentPathologyID(pathologyID)
    }

    const getPathologyError = () => <h1 className="my-5 text-5xl text-center">{(category === "") ? "Please select a category on the drop-down menu to the left" :"Please select an image on the menu to the left" }</h1>;
    
    function displayPathology(){
        if(currentPathologyID === null){
            return getPathologyError();
        }

        const pathology = state.apiResponse.find((item) => item._id === currentPathologyID);
        console.log(currentPathologyID)
        if(typeof pathology == "undefined"){
            return getPathologyError();
        }
        else{
            return (<Pathology pathologyData={pathology}></Pathology>);
        }
    }

    return(
        <div className="flex gap-2 w-full h-full max-w-screen-2xl">
            { category !== "" &&
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
            }
            <div className="atlas-section grow h-fit max-h-full overflow-scroll">
                {displayPathology()}
            </div>
        </div>
    );
}

export default Showcase;