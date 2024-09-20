import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Project from "./Project/Project.jsx";
import { store } from "./store/Store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <StrictMode> */}
      {/* <App /> */}
      {/* </StrictMode> */}
      <Project />
    </BrowserRouter>
  </Provider>
);
