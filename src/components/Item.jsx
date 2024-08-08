function Item({ item, toggleCheck, removeItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => toggleCheck(item.id)}
      />
      <span style={{ textDecoration: item.checked ? "line-through" : "none" }}>
        {item.title}
      </span>
      <button onClick={() => removeItem(item.id)}>❌</button>
    </li>
  );
}

export default Item;
