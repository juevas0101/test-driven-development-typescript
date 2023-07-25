import { FizzBuzz } from "../fizzbuzz";

describe('FizzBuzz', () => {
    describe('Fizz', () => {
        it.each([
            { input: 3 }
        ])('$input', ({ input }) => {
            // arrange
            const expected = "Fizz"
            const sut = new FizzBuzz();

            //act
            const actual = sut.case(input);

            // assert
            expect(actual).toBe(expected);
        })
    })

    describe('Buzz', () => {
        it.each([
            { input: 5 }
        ])('$input', ({ input }) => {
            // arrange
            const expected = "Buzz"
            const sut = new FizzBuzz();

            //act
            const actual = sut.case(input);

            // assert
            expect(actual).toBe(expected);
        })
    })

   describe('FizzBuzz', () => {
    it.each([
        {input: 15}
    ])('$input', ({ input }) => {
        // arrange
        const expected = "FizzBuzz"
        const sut = new FizzBuzz();

        // act
        const actual = sut.case(input);

        // assert
        expect(actual).toBe(expected);
     })
    });
})