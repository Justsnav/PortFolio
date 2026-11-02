import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Portfolio from "./Portfolio";
import ResumePage from "./ResumePage";
import "./styles.css";

const root = createRoot(document.getElementById("root")!);
root.render(<StrictMode>{window.location.pathname === "/resume" ? <ResumePage /> : <Portfolio />}</StrictMode>);
