import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./redux/store.jsx";
import { BrowserRouter } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <Toaster />
    </Provider>
  </BrowserRouter>
);
