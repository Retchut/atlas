import { useState } from "react";
import { MenuData } from '../../Data/MenuData.js';

function Selector(){

    function SelectorItem(props){
    
        const [ isOpen, setOpen ] = useState(false);
        const { item } = props;
    
        return (
            <li>
                <button className={`w-full text-start px-2 mt-1 text-lg` + (isOpen ? " bg-active-bg" : "")} onClick={()=>setOpen(!isOpen)}>{item.title}</button>
                {isOpen && 
                    <div className="px-5">
                        {item.children.map((entry => (
                            <SelectorItem item={entry} />
                        )))}
                    </div>
                }
            </li>
        )
    }

    return(
        <ul className="atlas-section h-full px-1 max-w-xs">
            {MenuData.map(entry => (
                <SelectorItem item={entry} />
            ))}
        </ul>
    )
}

export default Selector;