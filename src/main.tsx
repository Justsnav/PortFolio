import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Portfolio from "./Portfolio";
import ResumePage from "./ResumePage";
import "./styles.css";

const root = createRoot(document.getElementById("root")!);
const isResumePage = window.location.pathname.replace(/\/+$/, "") === "/resume";

root.render(<StrictMode>{isResumePage ? <ResumePage /> : <Portfolio />}</StrictMode>);
