import React from "react";
import { MenuData } from '../../Data/MenuData.js';

function Selector(){

    function buildChildItems(item){

        return (
            <>
                <p className="px-3">{item.title}</p>
                {item.children.length !== 0 &&
                    <ul>
                        {item.children.map((child) =>
                            <li>{buildChildItems(child)}</li>
                        )}
                    </ul>
                }
            </>
        )
    }

    return(
        <ul className="atlas-section h-full">
            {MenuData.map((item, index) => 
                <li key={"outer-" + index}>
                    {buildChildItems(item)}
                </li>
            )}
        </ul>
    )
}

export default Selector;