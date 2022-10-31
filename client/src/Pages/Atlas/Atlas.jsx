import React, { useState } from "react";
import Showcase from '../../Components/Showcase/Showcase.jsx';
import Selector from '../../Components/Selector/Selector.jsx';

function Atlas() {

    const [ category, setCategory ]  = useState("");
    const changeCategory = event => (category === event.currentTarget.name) ? setCategory("") : setCategory(event.currentTarget.name);

    return (
        <div className="w-screen h-screen flex p-4">
            <div className="mr-2">
                <Selector categoryHandler={changeCategory}></Selector>
            </div>
            <div className="ml-2 grow">
                <Showcase category={category}></Showcase>
            </div>
        </div>
    );
}

export default Atlas;