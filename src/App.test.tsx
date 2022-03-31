import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("App component", () => {
	it("shows the calories for 330ml", async () => {
		render(<App />);
		await userEvent.type(getAbvInput(), "4.5");
		await userEvent.type(getVolumeInput(), "330");
		expect(getCaloriesTextbox()).toHaveValue("126");
	});

	it("provides a shortcut for 330ml", async () => {
		render(<App />);
		await userEvent.type(getAbvInput(), "4.5");
		const volume = "330ml";
		await userEvent.click(getVolumeButton(volume));
		expect(getCaloriesTextbox()).toHaveValue("126");
	});

	it("shows the calories for 440ml", async () => {
		render(<App />);
		await userEvent.type(getAbvInput(), "4.8");
		await userEvent.type(getVolumeInput(), "440");
		expect(getCaloriesTextbox()).toHaveValue("179");
	});

	it("provides a shortcut for 440ml", async () => {
		render(<App />);
		await userEvent.type(getAbvInput(), "4.8");
		await userEvent.click(getVolumeButton("440ml"));
		expect(getCaloriesTextbox()).toHaveValue("179");
	});

	it("shows the calories for a pint", async () => {
		render(<App />);
		await userEvent.type(getAbvInput(), "5");
		await userEvent.type(getVolumeInput(), "568");
		expect(getCaloriesTextbox()).toHaveValue("240");
	});

	it("provides a shortcut for a pint", async () => {
		render(<App />);
		await userEvent.type(getAbvInput(), "5");
		await userEvent.click(getVolumeButton("568ml"));
		expect(getCaloriesTextbox()).toHaveValue("240");
	});

	it("gracefully handles NaN", async () => {
		render(<App />);
		await userEvent.clear(getAbvInput());
		expect(getCaloriesTextbox()).toHaveValue("0");
	});
});

const getAbvInput = () => screen.getByRole("spinbutton", { name: "ABV (%)" });

const getCaloriesTextbox = () => screen.getByRole("textbox", { name: "Calories" });

const getVolumeButton = (volume: string) => screen.getByRole("button", { name: volume });

const getVolumeInput = () => screen.getByRole("spinbutton", { name: "Volume (ml)" });
