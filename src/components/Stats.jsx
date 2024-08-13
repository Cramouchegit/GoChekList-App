function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <span>📝 Yuk mulai bikin catatan</span>
      </footer>
    );
  }

  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked).length;
  const percentage = Math.round((checkedItems / totalItems) * 100);
  return (
    <footer className="stats">
      <span>
        {percentage === 100
          ? "Kamu sudah melakukannya semua ✅"
          : `📃 Kamu Punya ${totalItems} catatan dan baru ${checkedItems} yg dicheklist (${percentage}%)`}
      </span>
    </footer>
  );
}

export default Stats;
