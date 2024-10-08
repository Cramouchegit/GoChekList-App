import { useState } from "react";

function Form({ onAddItem }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) return;

    const newItem = {
      id: Date.now(),
      title,
      checked: false,
    };

    onAddItem(newItem);

    setTitle("");
    console.log(e);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Ada yang mau kamu catat? 🤔</h3>
      <input
        type="text"
        name="title"
        id=""
        value={title}
        onChange={(e) => {
          // console.log(e);
          setTitle(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
