import { useState } from "react";
import "./App.css";
import { puppyList } from "./data.js";

function App() {
  const [puppies, setPuppies] = useState(puppyList); //const[value you are storing, a function you can use to reset the value]
  //useState is a hook - it needs a default value -- here, the (puppyList) array, from the data.js is the default value
  const [featPupId, setFeatPupId] = useState(null);
  function handleClick() {
    // some logic here
  }
  // console.log("Puppy List: ", puppies);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  return (
    <>
      <div className="App">
        {puppies.map((puppy) => {
          return (
            <p
              onClick={() => {
                setFeatPupId(puppy.id);
              }}
              key={puppy.id}
            >
              {puppy.name}
            </p>
          ); //key maintains the integrity of the order of elements
        })}
        {featPupId && (
          <div>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
// {} in <div> let us write .js code
export default App;
