import { formatPrice } from './formatPrice';

describe('formatPrice', () => {
    test('formats integer price correctly', () => {
        expect(formatPrice(10)).toBe('$10.00');
    });

    test('formats price with decimals correctly', () => {
        expect(formatPrice(12.99)).toBe('$12.99');
    });

    test('formats price with many decimals by rounding', () => {
        expect(formatPrice(12.999)).toBe('$13.00');
    });
});
