import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MyContextProvider } from "./Context/MyContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyContextProvider>
      <App />
    </MyContextProvider>
  </StrictMode>
);




// // 2. Wrap App with the Provider – index.js or App.js

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import UserProvider from "./Context/UserProvider.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <UserProvider>
//       <App />
//     </UserProvider>
//   </StrictMode>
// );

// // 2. Wrap App with the Provider – index.js or App.js
