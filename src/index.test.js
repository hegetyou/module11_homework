
import {getPercents} from './index.js';
describe("test getPercents", () => {
    it ( "getPercents 40, 150 is equal to 60", () => {
		const result = getPercents(40, 150);
		expect(result).toBe(60);
	}),
	it ( "getPercents 0, 50 is equal to 0", () => {
		const result = getPercents(0, 50);
		expect(result).toBe(0);
	}),
	it ( "getPercents -10, 150 is equal to -15", () => {
		const result = getPercents(-10, 150);
		expect(result).toBe(-15);
	})
});