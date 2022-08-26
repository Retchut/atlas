import React, { useState, useEffect } from 'react';
import Pathology from '../../Components/Pathology/Pathology.jsx'

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
            return <Pathology pathologyData={pathology}></Pathology>;
        }
    }

    return(
        <div className="atlas-page">
            <div className="h-screen w-screen flex justify-center items-center">
                <div className="gap-2 w-2/3 h-screen3/4 auto-cols-max flex">
                    {/* pathology selector */}
                    <div className="bg-theme2-blue-light rounded-lg overflow-auto min-w-max w-fit flex justify-center">
                        <div className="">
                            {state.apiResponse.map((pathology, index) => (
                                <img
                                    className="m-4 rounded-lg cursor-pointer"
                                    src={process.env.REACT_APP_SERVER_STORAGE_DIR + pathology.imageHash}
                                    alt={pathology.name + '-thumb'}
                                    onClick={() => handlePathologyClick(pathology._id)}
                                    key={'pathology-thumb-' + index}>
                                </img>))
                            }
                        </div>
                    </div>
                    {/* pathology showcase */}
                    <div className="bg-theme2-blue-light rounded-lg overflow-auto grow"> {/*min-w-max*/}
                        {displayPathology()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Atlas;