import React from "react";
import "./App.css";
import SetData from "./SetData";
import ChatComponent from "./ChatComponent";
const App = () => {
  let inputs = [];
  return (
    <>
      <SetData input={inputs}>
        <ChatComponent />
      </SetData>
    </>
  );
};

export default App;
