import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import MainBody from './components/MainBody'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header/>
    <MainBody/>
  </StrictMode>
);
