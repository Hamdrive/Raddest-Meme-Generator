import { useState, useEffect } from "react";

export default function MemeContent() {
  const [content, setContent] = useState([
    {
      topText: "",
      bottomText: "",
      memeTemplate: "https://i.imgflip.com/3oevdk.jpg"
    }
  ]);
  const [memeArray, setMemeArray] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target; //destructuring
    setContent((prevContent) => {
      return { ...prevContent, [name]: value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleClick() {
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const selectedMeme = memeArray[randomNumber].url;
    setContent((prevContent) => ({
      ...prevContent,
      memeTemplate: selectedMeme
    }));
  }

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((content) => setMemeArray(content.data.memes));
  });

  return (
    <main>
      <form onSubmit={handleSubmit}>
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
      </form>
      <div>
        <button onClick={handleClick}>Generate New Meme Template</button>
        <img
          style={{ width: "500px", height: "500px" }}
          src={content.memeTemplate}
          alt="meme"
        />
      </div>
    </main>
  );
}
