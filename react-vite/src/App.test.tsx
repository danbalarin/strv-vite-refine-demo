import { beforeEach, describe, it, expect, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import App from "./App";

describe("[Component] App", () => {
	beforeEach(() => {
		render(<App />);
	});

	afterEach(() => {
		cleanup();
	});

	it("should render", () => {
		expect(screen).toBeDefined();
	});

	it("should render counter", async () => {
		expect(
			await screen.getByText("Click on the Vite and React logos to learn more")
		).toBeInTheDocument();
	});
});
