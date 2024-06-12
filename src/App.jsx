import { useState } from "react";
import "./App.css";
import { puppyList } from "./data.js";

function App() {
  const [puppies, setPuppies] = useState(puppyList); //const[value you are storing, a function you can use to reset the value]
  //useState is a hook - it needs a default value -- here, the (puppyList) array, from the data.js is the default value
  console.log("Puppy List: ", puppies);
  return (
    <>
      <div>
        {puppies.map((puppy) => {
          return <p key={puppy.id}>{puppy.name}</p>;
        })}
      </div>
    </>
  );
}
// {} in <div> let us write .js code
export default App;
