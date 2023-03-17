import React, { useState, useEffect } from "react";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";

import Showcase from "../../Components/Showcase/Showcase.jsx";
import Selector from "../../Components/Selector/Selector.jsx";

function Atlas() {
  const [category, setCategory] = useState("");
  const [isLargeScreen, setMediumScreen] = useState(false);
  const [selectorOpen, setSelectorOpen] = useState(true);
  const [openCategories, setOpenCategories] = useState([]);
  const changeCategory = (newCategory) =>
    category === newCategory ? setCategory("") : setCategory(newCategory);

  const handleWindowResize = () => {
    const lgBreakpointSize = 1024;
    if(window.innerWidth <= lgBreakpointSize && !isLargeScreen)
      setMediumScreen(true);
    else if(window.innerWidth > lgBreakpointSize && isLargeScreen)
      setMediumScreen(false);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize)
  })

  console.log(isLargeScreen);

  return (
    <div className="w-screen h-screen flex p-4">
      {isLargeScreen && (
        <div className="mr-2">
          <RxDoubleArrowRight />
        </div>
      )}
      <div className="mr-2 hidden lg:block lg:w-[20%]">
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
      <div className="ml-2 lg:w-[80%]">
        <Showcase category={category}></Showcase>
      </div>
    </div>
  );
}

export default Atlas;
