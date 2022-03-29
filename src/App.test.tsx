import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("App component", () => {
	it("shows the calories for 330ml", () => {
		render(<App />);
		userEvent.type(getAbvInput(), "4.5");
		userEvent.type(getVolumeInput(), "330");
		expect(getCaloriesTextbox()).toHaveValue("126");
	});

	it("provides a shortcut for 330ml", () => {
		render(<App />);
		userEvent.type(getAbvInput(), "4.5");
		const volume = "330ml";
		userEvent.click(getVolumeButton(volume));
		expect(getCaloriesTextbox()).toHaveValue("126");
	});

	it("shows the calories for 440ml", () => {
		render(<App />);
		userEvent.type(getAbvInput(), "4.8");
		userEvent.type(getVolumeInput(), "440");
		expect(getCaloriesTextbox()).toHaveValue("179");
	});

	it("provides a shortcut for 440ml", () => {
		render(<App />);
		userEvent.type(getAbvInput(), "4.8");
		userEvent.click(getVolumeButton("440ml"));
		expect(getCaloriesTextbox()).toHaveValue("179");
	});

	it("shows the calories for a pint", () => {
		render(<App />);
		userEvent.type(getAbvInput(), "5");
		userEvent.type(getVolumeInput(), "568");
		expect(getCaloriesTextbox()).toHaveValue("240");
	});

	it("provides a shortcut for a pint", () => {
		render(<App />);
		userEvent.type(getAbvInput(), "5");
		userEvent.click(getVolumeButton("568ml"));
		expect(getCaloriesTextbox()).toHaveValue("240");
	});

	it("gracefully handles NaN", () => {
		render(<App />);
		userEvent.clear(getAbvInput());
		expect(getCaloriesTextbox()).toHaveValue("0");
	});
});

const getAbvInput = () => screen.getByRole("spinbutton", { name: "ABV (%)" });

const getCaloriesTextbox = () => screen.getByRole("textbox", { name: "Calories" });

const getVolumeButton = (volume: string) => screen.getByRole("button", { name: volume });

const getVolumeInput = () => screen.getByRole("spinbutton", { name: "Volume (ml)" });
