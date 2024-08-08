import Item from "./Item";

function CheckList({ items, toggleCheck, removeItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            toggleCheck={toggleCheck}
            removeItem={removeItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default CheckList;
