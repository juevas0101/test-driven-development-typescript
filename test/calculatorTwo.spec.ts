import { Numbers } from "../application/calculator";

describe('class Numbers', () => {
    it.each([
        { numbers: new Array(2, 2, 2), expected: true }
    ])('must return expected: $expected if the numbers; $numbers are even', ({ numbers, expected }) => {
        // arrange
        const sut = new Numbers();
        //act
        const actual = sut.validation(numbers);

        //assert
        expect(actual).toBe(expected);
    })

    it.each([
        { numbers: new Array(3, 4, 7), expected: false }
    ])('must return expected: $expected if the numbers: $numbers are odd', ({ numbers, expected }) => {
        // arrange
        const sut = new Numbers();
        //act
        const actual = sut.validation(numbers);

        //assert
        expect(actual).toBe(expected);
    })
})