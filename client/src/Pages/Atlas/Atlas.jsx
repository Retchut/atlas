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
        const rowMaxSubCategorys = 4;
        const builtRows = [];
        const subCategorys = categories[category];
        for(let i = 0; i < subCategorys.length; i++){
            if(i % rowMaxSubCategorys === 0){
                builtRows.push([subCategorys[i]]);;
            }
            else{
                builtRows[Math.floor(i/rowMaxSubCategorys)].push(subCategorys[i]);
            }
        }
        return builtRows;
    }

    return (
        <div>
            <div className="w-screen flex justify-center">
                <div className="mb-2 w-11/12">
                    {/* Category grid */}
                    <div className={`atlas-section mt-4 mb-2 py-3 grid grid-cols-${categoryCols} justify-center`}>
                        {categoryKeys.map((item) => (
                            <div className="flex justify-center">
                                <button type="button" name={item} className="py-1 px-2 text-3xl" onClick={changeCategory}>{item}</button>
                            </div>
                        ))}
                    </div>
                    {/* Subcategory grid */}
                    { category !== "" &&
                    <div className="atlas-section">
                        {buildSubCategoryRows().map((row, index) => {
                            return (
                                <div key={`subcategoryRow-${index}`} className={"grid grid-cols-" + row.length}>
                                    {row.map(item => (
                                        <div className="flex justify-center">
                                            <button name={item} className="my-1 py-1 px-2 text2xl row-span-1" onClick={changeSubCategory}>{item}</button>
                                        </div>
                                    ))}
                                </div>
                            )
                        })}
                    </div>
                    }
                </div>
            </div>
            {category !== "" && subCategory !== "" && <Showcase category={category} subCategory={subCategory}></Showcase>}
        </div>
    );
}

export default Atlas;