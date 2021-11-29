import { useState } from "react";

export default function MemeContent() {
  const [content, setContent] = useState([
    {
      topText: "",
      bottomText: ""
    }
  ]);

  function handleChange(e) {
    if (e.target.className === "top") {
      setContent((prevContent) => ({
        ...prevContent,
        topText: e.target.value
      }));
    } else if (e.target.className === "bottom") {
      setContent((prevContent) => ({
        ...prevContent,
        bottomText: e.target.value
      }));
    }
  }

  return (
    <main>
      <input className="top" type="text" onChange={(e) => handleChange(e)} />
      <input className="bottom" type="text" onChange={(e) => handleChange(e)} />
      <button>Generate Meme Template</button>
    </main>
  );
}
