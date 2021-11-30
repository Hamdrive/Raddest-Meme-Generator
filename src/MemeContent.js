import { useState } from "react";

export default function MemeContent() {
  const [content, setContent] = useState([
    {
      topText: "",
      bottomText: ""
    }
  ]);

  function handleChange(event) {
    const { name, value } = event.target; //destructuring
    setContent((prevContent) => {
      return { ...prevContent, [name]: value };
    });
  }

  return (
    <main>
      <input
        name="top"
        type="text"
        onChange={handleChange}
        value={content.topText}
      />
      <input
        name="bottom"
        type="text"
        onChange={handleChange}
        value={content.bottomText}
      />
      <button>Generate Meme Template</button>
    </main>
  );
}
