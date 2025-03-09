import React from "react";
import ReactDOM from "react-dom/client";
// Default Export
import Navbar from "./components/Navbar";
// Name Export
import { ProductCard } from "./components/ProductCard";




// JSX syntax example (not inside a function component)
const element = (
  <div>
    <h1>Hello, JSX!</h1>
    <p>This is JSX outside a function component.</p>
  </div>
);

// Functional Component Example
const Test = () => {
  return (
    <div>
      <h1>Hello, JSX!</h1>
    </div>
  );
};

// Another Functional Component that includes `Test` component
const Test2 = () => (
  <div>
    <Test />
    <h1>Test Component</h1>
  </div>
);


// Main App Component (Renders Navbar & ProductCard)
const App = () => {
  return (
    <div>
      <Navbar />
      <ProductCard />
    </div>
  );
};

// Rendering the App Component to the Root DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


