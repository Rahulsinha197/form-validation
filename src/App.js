import React from "react";
import "./App.css";

const Form = React.lazy(() => import("./components/Form"));

function App() {
  return <Form />;
}

export default App;
