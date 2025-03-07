import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  // let foodItems = [
  //   "Beans",
  //   "Vegies",
  //   "Carbs",
  //   "Dairy Products",
  //   "Meat",
  //   "Fruits",
  //   "Ghee",
  // ];
  let foodItems = [];
  // if (foodItems.length === 0) {
  //   return <h3>I am empty</h3>;
  // }
  // let emptyMessage = foodItems.length === 0 ? <h4>I'm empty</h4> : null;

  return (
    <>
      <h3>Healthy Foods</h3>
      {/* {emptyMessage} */}
      {foodItems.length === 0 && <h5>I'm still hungry</h5>}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
