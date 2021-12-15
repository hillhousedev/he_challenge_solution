const isCapital = require('./index');

describe('Testing arguments for errors', () => {
    //test for null 
    test('test for null, empty, false, and other value types', () => {
        expect(() => { isCapital.isFirstLetterUpper(null); }).toThrow();
        expect(() => { isCapital.isFirstLetterUpper(95); }).toThrow();
        expect(() => { isCapital.isFirstLetterUpper(() => 9); }).toThrow();
        expect(() => { isCapital.isFirstLetterUpper(false); }).toThrow();
        expect(() => {isCapital.isFirstLetterUpper(); }).toThrow();
    });
});

test('returns true if first letter is uppercase', () => {
    expect(isCapital.isFirstLetterUpper("Richard is eating the meat")).toBe(true);
});

test('returns false if first letter is a downcase', () => {
    expect(isCapital.isFirstLetterUpper('richard is eating the meat')).toBe(false);
});

test("returns false when first letter is a symbol", () => {
    expect(isCapital.isFirstLetterUpper('#Richard is eating the meat')).toBe(false);

});

test("returns false if the string passed in is empty", () => {
    expect(isCapital.isFirstLetterUpper('')).toBe(false);
});

describe('Test for single characters', () => {
    test("test truth and false of single character", () => {
        expect(isCapital.isFirstLetterUpper('e')).toBe(false);
        expect(isCapital.isFirstLetterUpper('E')).toBe(true);
    });
});
