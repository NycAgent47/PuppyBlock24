import React, { useState } from "react";
import { puppyList } from "./data.js";
import { className } from "./path-to-App.css";

function App() {
  // Initialize the puppies state with the puppyList array
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  console.log(featuredPup);

  return (
    <div>
      {puppies.map((puppy) => {
        return (
          <p key={puppy.id} onClick={() => setFeatPupId(puppy.id)}>
            {puppy.name}
          </p>
        );
      })}

      {/* Render detailed information of the featured puppy */}
      {featPupId && featuredPup && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Breed: {featuredPup.breed}</li>{" "}
            {/* Assuming breed is a property */}
            {/* Add other properties as needed */}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
