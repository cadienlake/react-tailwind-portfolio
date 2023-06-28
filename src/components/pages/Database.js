import React from "react";
import { useState } from "react";

function Database() {
  const [artist, setArtist] = useState("");
  const [image, setImage] = useState("");
  const [listen, setListen] = useState("");
  const [role, setRole] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch("http://localhost:5000/database", {
      method: "post",
      body: JSON.stringify({ artist, image, listen, role, title, year }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result) {
      alert("Data saved succesfully");
      setArtist("");
      setImage("");
      setListen("");
      setRole("");
      setTitle("");
      setYear("");
    }
  };
  return (
    <div class="animate-enter flex flex-col justify-evenly">
      <h1 class="text-biggie lowercase text-center">Upload release information here! </h1>
      <form action="">
        <input type="text" placeholder="artist name" value={artist} onChange={(e) => setArtist(e.target.value)} />
        <input type="text" placeholder="release title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="role" value={role} onChange={(e) => setRole(e.target.value)} />
        <input type="text" placeholder="year" value={year} onChange={(e) => setYear(e.target.value)} />
        <input type="text" placeholder="image source" value={image} onChange={(e) => setImage(e.target.value)} />
        <input type="text" placeholder="listen url" value={listen} onChange={(e) => setListen(e.target.value)} />
        <button type="submit" onClick={handleOnSubmit}>
          submit
        </button>
      </form>
    </div>
  );
}

export default Database;
