import { isPositive } from "./isPositive";

describe('check positive for n ', () => {
    it('if n > 0', () => {
        expect(isPositive(100)).toBe(true);
        expect(isPositive(200)).toBe(true);
        expect(isPositive(300)).toBe(true);
    });
    it('if n = 0', () => {
        expect(isPositive(0)).toBe(false);
    });
    it('if n < 0', () => {
        expect(isPositive(-100)).toBe(false);
        expect(isPositive(-200)).toBe(false);
        expect(isPositive(-300)).toBe(false);
    });
});