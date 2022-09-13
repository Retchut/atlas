import React, { useState } from "react";
import Showcase from '../../Components/Showcase/Showcase.jsx';

function Atlas() {
    const tabs = {
        "Alterações Celulares" : [ "AltCelTab", "AltCelTab", "AltCelTab" ],
        "Alterações Metabólicas" : [ "AltMetTab", "AltMetTab", "AltMetTab", "AltMetTab" ],
        "Alterações de Crescimento" : [ "AltCrescTab", "AltCrescTab", "AltCrescTab", "AltCrescTab", "AltCrescTab" ],
        "Necroses" : [ "NecTab", "NecTab", "NecTab", "NecTab", "NecTab", "NecTab", "NecTab", "NecTab", "NecTab", "NecTab" ],
        "Inflamação Aguda" : [ "InfAgTab", "InfAgTab" ],
        "Inflamação Crónica" : [ "InfCronTab", "InfCronTab", "InfCronTab" ],
        "Regeneração e Reparação" : [ "RegRepTab", "RegRepTab", "RegRepTab" ],
        "Neoplasias" : [ "NeopTab", "NeopTab", "NeopTab", "NeopTab", "NeopTab", "NeopTab", "NeopTab", "NeopTab", "NeopTab", "NeopTab", "NeopTab", "NeopTab", "NeopTab", "NeopTab", "NeopTab" ]
    };

    const tabKeys = Object.keys(tabs);
    // const tabCols = Math.floor(tabs/2)
    const tabCols = 4;

    const [ tab, setTab ]  = useState("");
    const [ subTab, setSubtab ] = useState("");
    const changeTab = event => (tab === event.currentTarget.name) ? (setTab(""), setSubtab("")) : setTab(event.currentTarget.name);
    const changeSubTab = event => (subTab === event.currentTarget.name) ? setSubtab("") : setSubtab(event.currentTarget.name);

    function buildSubTabRows() {
        const rowMaxSubTabs = 4;
        const builtRows = [];
        const subtabs = tabs[tab];
        for(let i = 0; i < subtabs.length; i++){
            if(i % rowMaxSubTabs === 0){
                builtRows.push([subtabs[i]]);;
            }
            else{
                builtRows[Math.floor(i/rowMaxSubTabs)].push(subtabs[i]);
            }
        }
        return builtRows;
    }

    return (
        <div>
            <div className="w-screen flex justify-center">
                <div className="mb-2 w-11/12">
                    {/* Tab grid */}
                    <div className={`atlas-section mt-4 mb-2 grid grid-cols-${tabCols} justify-center`}>
                        {tabKeys.map((item) => (
                            <button type="button" name={item} className="my-1 text-4xl" onClick={changeTab}>{item}</button>
                        ))}
                    </div>
                    {/* Subtab grid */}
                    { tab !== "" &&
                    <div className="atlas-section">
                        {buildSubTabRows().map((row, index) => {
                            return (
                                <div key={`subtabRow-${index}`} className={"grid grid-cols-" + row.length}>
                                    {row.map(item => <button name={item} className="my-1 text3xl row-span-1" onClick={changeSubTab}>{item}</button>)}
                                </div>
                            )
                        })}
                    </div>
                    }
                </div>
            </div>
            {tab !== "" && subTab !== "" && <Showcase></Showcase>}
        </div>
    );
}

export default Atlas;