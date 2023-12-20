import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container: HTMLElement = document.getElementById("root")!;

createRoot(container).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
