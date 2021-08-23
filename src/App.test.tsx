import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("App component", () => {
	it("shows the calories for 330ml", () => {
		render(<App />);
		userEvent.type(screen.getByRole("spinbutton", { name: "ABV (%)" }), "4.5");
		userEvent.type(screen.getByRole("spinbutton", { name: "Volume (ml)" }), "330");
		expect(screen.getByRole("textbox", { name: "Calories" })).toHaveValue("126");
	});

	it("provides a shortcut for 330ml", () => {
		render(<App />);
		userEvent.type(screen.getByRole("spinbutton", { name: "ABV (%)" }), "4.5");
		userEvent.click(screen.getByRole("button", { name: "330ml" }));
		expect(screen.getByRole("textbox", { name: "Calories" })).toHaveValue("126");
	});

	it("shows the calories for 440ml", () => {
		render(<App />);
		userEvent.type(screen.getByRole("spinbutton", { name: "ABV (%)" }), "4.8");
		userEvent.type(screen.getByRole("spinbutton", { name: "Volume (ml)" }), "440");
		expect(screen.getByRole("textbox", { name: "Calories" })).toHaveValue("179");
	});

	it("provides a shortcut for 440ml", () => {
		render(<App />);
		userEvent.type(screen.getByRole("spinbutton", { name: "ABV (%)" }), "4.8");
		userEvent.click(screen.getByRole("button", { name: "440ml" }));
		expect(screen.getByRole("textbox", { name: "Calories" })).toHaveValue("179");
	});

	it("shows the calories for a pint", () => {
		render(<App />);
		userEvent.type(screen.getByRole("spinbutton", { name: "ABV (%)" }), "5");
		userEvent.type(screen.getByRole("spinbutton", { name: "Volume (ml)" }), "568");
		expect(screen.getByRole("textbox", { name: "Calories" })).toHaveValue("240");
	});

	it("provides a shortcut for a pint", () => {
		render(<App />);
		userEvent.type(screen.getByRole("spinbutton", { name: "ABV (%)" }), "5");
		userEvent.click(screen.getByRole("button", { name: "568ml" }));
		expect(screen.getByRole("textbox", { name: "Calories" })).toHaveValue("240");
	});

	it("gracefully handles NaN", () => {
		render(<App />);
		userEvent.clear(screen.getByRole("spinbutton", { name: "ABV (%)" }));
		expect(screen.getByRole("textbox", { name: "Calories" })).toHaveValue("0");
	});
});
