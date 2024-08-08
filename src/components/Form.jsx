import { useState } from "react";

function Form({ addItem }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addItem(title);
      setTitle("");
    }
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
          setTitle(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
