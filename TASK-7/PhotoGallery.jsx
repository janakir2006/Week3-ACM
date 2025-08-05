// src/PhotoGallery.jsx
import React, { useState } from "react";
import photos from "./data";

function PhotoGallery() {
  const [category, setCategory] = useState("All");
  const [filtered, setFiltered] = useState(photos);

  const handleSearch = () => {
    if (category === "All") {
      setFiltered(photos);
    } else {
      const result = photos.filter(photo => photo.category === category);
      setFiltered(result);
    }
  };

  return (
    <div className="gallery-container">
      <h1>Photo Gallery</h1>
      <div className="controls">
        <select className = "dropdown"value={category} onChange={e => setCategory(e.target.value)}>
          <option value="All">All</option>
          <option value="Nature">Nature</option>
          <option value="City">City</option>
          <option value="Animals">Animals</option>
          
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="grid">
        {filtered.map((photo, index) => (
          <img key={index} src={photo.src} alt={photo.category} />
        ))}
      </div>
    </div>
  );
}

export default PhotoGallery;
