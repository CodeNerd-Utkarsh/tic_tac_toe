import * as RDC from "react-dom/client"
import Game from "./Game";
import "./index.css"
const root = document.getElementById("root");
const app = RDC.createRoot(root);

app.render(
    <Game />
)