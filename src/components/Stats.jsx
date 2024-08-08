function Stats({ items }) {
  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked).length;
  const checkedPercentage = totalItems
    ? Math.round((checkedItems / totalItems) * 100)
    : 0;

  return (
    <footer className="stats">
      <span>
        📃 Kamu punya {totalItems} catatan dan baru {checkedItems} yang
        dichecklist ({checkedPercentage}%) ✅
      </span>
    </footer>
  );
}

export default Stats;
