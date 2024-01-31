import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UpvoteContextProvider } from "./context/UpvoteContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <UpvoteContextProvider>
      <App />
    </UpvoteContextProvider>
);
