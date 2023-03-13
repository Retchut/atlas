import React, { useState } from "react";
import Showcase from "../../Components/Showcase/Showcase.jsx";
import Selector from "../../Components/Selector/Selector.jsx";

function Atlas() {
  const [category, setCategory] = useState("");
  const [openCategories, setOpenCategories] = useState([]);
  const changeCategory = (newCategory) =>
    category === newCategory ? setCategory("") : setCategory(newCategory);

  return (
    <div className="w-screen h-screen flex p-4">
      <div className="mr-2">
        <div className="my-2 atlas-section button-link text-center text-2xl">
          <a href="/">Voltar</a>
        </div>
        <Selector
          category={category}
          openCategories={openCategories}
          categorySetter={changeCategory}
          openCategoriesSetter={setOpenCategories}
        ></Selector>
      </div>
      <div className="ml-2 grow">
        <Showcase category={category}></Showcase>
      </div>
    </div>
  );
}

export default Atlas;
