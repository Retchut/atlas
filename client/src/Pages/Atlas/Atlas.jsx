import React, { useState } from "react";
import Showcase from '../../Components/Showcase/Showcase.jsx';

function Atlas() {
    const categories = {
        "Alterações Celulares" : [ "AltCelCategory1", "AltCelCategory2", "AltCelCategory3" ],
        "Alterações Mecategoryólicas" : [ "AltMetCategory1", "AltMetCategory2", "AltMetCategory3", "AltMetCategory4" ],
        "Alterações de Crescimento" : [ "AltCrescTa1", "AltCrescCategory2", "AltCrescCategory3", "AltCrescCategory4", "AltCrescCategory5" ],
        "Necroses" : [ "NecCategory1", "NecCategory2", "NecCategory3", "NecCategory4", "NecCategory5", "NecCategory6", "NecCategory7", "NecCategory8", "NecCategory9", "NecCategory10" ],
        "Inflamação Aguda" : [ "InfAgCategory1", "InfAgCategory2" ],
        "Inflamação Crónica" : [ "InfCronCategory1", "InfCronCategory2", "InfCronCategory3" ],
        "Regeneração e Reparação" : [ "RegRepCategory1", "RegRepCategory2", "RegRepCategory3" ],
        "Neoplasias" : [ "NeopCategory1", "NeopCategory2", "NeopCategory3", "NeopCategory4", "NeopCategory5", "NeopCategory6", "NeopCategory7", "NeopCategory8", "NeopCategory9", "NeopCategory10", "NeopCategory11", "NeopCategory12", "NeopCategory13", "NeopCategory14", "NeopCategory15" ]
    };

    const categoryKeys = Object.keys(categories);
    const categoryCols = 4;

    const [ category, setCategory ]  = useState("");
    const [ subCategory, setSubcategory ] = useState("");
    const changeCategory = event => (category === event.currentTarget.name) ? (setCategory(""), setSubcategory("")) : (setCategory(event.currentTarget.name), setSubcategory(""));
    const changeSubCategory = event => (subCategory === event.currentTarget.name) ? setSubcategory("") : setSubcategory(event.currentTarget.name);

    function buildSubCategoryRows() {
        const rowMaxSubcategories = 4;
        const builtRows = [];
        const subcategories = categories[category];
        for(let i = 0; i < subcategories.length; i++){
            if(i % rowMaxSubcategories === 0){
                builtRows.push([subcategories[i]]);;
            }
            else{
                builtRows[Math.floor(i/rowMaxSubcategories)].push(subcategories[i]);
            }
        }
        return builtRows;
    }

    return (
        <div className="w-screen h-screen flex">
            <div className="bg-black text-white menu-selector">
                eventual navbar
            </div>
            <div className="grow">
                <Showcase category={category} subCategory={subCategory}></Showcase>
            </div>
        </div>
    );
}

export default Atlas;