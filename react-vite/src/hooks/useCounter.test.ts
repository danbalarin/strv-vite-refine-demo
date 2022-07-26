import { describe, expect, it } from "vitest";
import { act, renderHook } from "@testing-library/react-hooks";
import { useCounter } from "./useCounter";

describe("[Hook] useCounter", () => {
	it("should initialize with value", () => {
		const initialValue = 5;
		const { result } = renderHook(() => useCounter(initialValue));
		expect(result.current.count).toBe(initialValue);
	});

	it("should increment", () => {
		const { result } = renderHook(() => useCounter());
		act(() => result.current.increment());
		expect(result.current.count).toBe(1);
	});
	it("should decrement", () => {
		const { result } = renderHook(() => useCounter());
		act(() => result.current.decrement());
		expect(result.current.count).toBe(-1);
	});
});
