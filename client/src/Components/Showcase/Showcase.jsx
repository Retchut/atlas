import React, { useState, useEffect } from "react";
import Pathology from "../Pathology/Pathology.jsx";
import { categoryMap } from "../../Data/CategoryMap.js";

function Showcase(props) {
  const { category } = props;
  const [apiResponse, setApiResponse] = useState([]);
  const [currentPathologyID, setCurrentPathologyID] = useState(null);

  useEffect(() => {
    fetch(
      process.env.REACT_APP_SERVER_LOCATION + "atlas/" + categoryMap[category]
    )
      .then((res) => res.json())
      .then((resData) => setApiResponse(resData))
      .catch(err => console.error(err));
  }, [category]);

  function handlePathologyClick(pathologyID) {
    setCurrentPathologyID(pathologyID);
  }

  const getPathologyError = () => (
    <h1 className="my-5 px-4 text-5xl text-center">
      {category === ""
        ? "Please select a category on the drop-down menu to the left"
        : "Please select an image on the menu to the left"}
    </h1>
  );

  function displayPathology() {
    if (currentPathologyID === null) {
      return getPathologyError();
    }

    const pathology = apiResponse.find(
      (item) => item._id === currentPathologyID
    );
    if (typeof pathology == "undefined") {
      return getPathologyError();
    } else {
      return <Pathology pathologyData={pathology}></Pathology>;
    }
  }

  return (
    <div className="flex gap-2 w-full h-full max-w-screen-2xl">
      <div className="w-[15%]">
        {apiResponse.length !== 0 && (
          <div className="atlas-section min-w-full h-fit px-2 max-h-full flex flex-col items-center">
            {apiResponse.map((pathology, index) => (
              <img
                className="max-w-pathology-thumbnail w-full my-2 rounded-lg cursor-pointer"
                src={
                  process.env.REACT_APP_SERVER_LOCATION +
                  "storage/" +
                  pathology.imageHash
                }
                alt={pathology.name + "-thumb"}
                onClick={() => handlePathologyClick(pathology._id)}
                key={"pathology-thumb-" + index}
              ></img>
            ))}
          </div>
        )}
      </div>
      <div className="w-[85%] atlas-section h-fit max-h-full overflow-scroll">
        {displayPathology()}
      </div>
    </div>
  );
}

export default Showcase;
