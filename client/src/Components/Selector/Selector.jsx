import { MenuData } from "../../Data/MenuData.js";

function Selector(props) {
  const { category, categorySetter, openCategories, openCategoriesSetter } =
    props;

  function SelectorItem(props) {
    const { item } = props;
    const title = item.title;
    const isOpen = openCategories.includes(title);
    const isSelected = category === title;

    const handleClick = () => {
      if (item.children.length === 0) {
        categorySetter(title);
      } else {
        if (openCategories.includes(title)) {
          openCategoriesSetter(openCategories.filter((item) => item !== title));
        } else {
          openCategoriesSetter([...openCategories, title]);
        }
      }
    };

    return (
      <li>
        <button
          className={
            `w-full text-start px-2 mt-1 text-lg` +
            (isOpen ? " bg-active-bg" : "") +
            (isSelected ? " bg-selected-bg" : "")
          }
          onClick={() => handleClick()}
        >
          {title}
        </button>
        {isOpen && (
          <ul className="px-5">
            {item.children.map((entry, index) => (
              <SelectorItem item={entry} key={`${entry.title}-${index}`} />
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <div className="h-full">
      <ul className="atlas-section h-fit max-h-full px-1 pb-1 max-w-xs">
        {MenuData.map((entry, index) => (
          <SelectorItem item={entry} key={`${entry.title}-${index}`} />
        ))}
      </ul>
    </div>
  );
}

export default Selector;
