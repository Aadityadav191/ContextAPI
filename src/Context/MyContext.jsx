import React, { createContext, useState } from "react";

// Create the context
export const MyContext = createContext();

// Create the provider component
export const MyContextProvider = ({ children }) => {
  const [sharedData, setSharedData] = useState("Hello from Context creater!");

  return (
    <MyContext.Provider value={{ sharedData, setSharedData }}>
      {children}
    </MyContext.Provider>
  );
};

//(1) Context + Provider logic
// 1. Create Context & Provider – MyContext.js

// 2. Wrap App with the Provider – index.js or App.js
// 3. Use Context in Any Page or Component – Hero.jsx, About.jsx, etc.                                
