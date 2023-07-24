import { Move, Outcome, createPaperRockScissors } from "../testing-driven-development";

describe('rock-paper-scicross', () => {
    describe('play', () => {
        describe('paper beats rock', () => {
            it('given player move paper and opponent move rock should return player wins', () => {
                // arrange
                const playerMove = Move.Paper;
                const opponentMove = Move.Rock;
                const expected = Outcome.PlayerWins;
                const sut = createPaperRockScissors();
                // act
                const actual = sut.play(playerMove, opponentMove)
                // assert
                expect(actual).toBe(expected);
            })
    
            it('given player move rock and opponent move paper should return player loses', () => {
                // arrange
                const playerMove = Move.Rock;
                const opponentMove = Move.Paper;
                const expected = Outcome.PlayerLoses;
                const sut = createPaperRockScissors();
                // act
                const actual = sut.play(playerMove, opponentMove)
                // assert
                expect(actual).toBe(expected);
            })
        })
    
       describe('scissors beats paper', () => {
        it('given player move paper and opponent move scissors should return player loses', () => {
            // arrange
            const playerMove = Move.Paper;
            const opponentMove = Move.Scissors;
            const expected = Outcome.PlayerLoses;
            const sut = createPaperRockScissors();
            // act
            const actual = sut.play(playerMove, opponentMove)
            // assert
            expect(actual).toBe(expected);
        })

        it('given player move scissors and opponent move paper should return player wins', () => {
            // arrange
            const playerMove = Move.Scissors;
            const opponentMove = Move.Paper;
            const expected = Outcome.PlayerWins;
            const sut = createPaperRockScissors();
            // act
            const actual = sut.play(playerMove, opponentMove)
            // assert
            expect(actual).toBe(expected);
        })
       })

       describe('rock beats scissors', () => {
        it('given player move rock and opponent move scissors should return player wins', () => {
            // arrange
            const playerMove = Move.Rock;
            const opponentMove = Move.Scissors;
            const expected = Outcome.PlayerWins;
            const sut = createPaperRockScissors();
            // act
            const actual = sut.play(playerMove, opponentMove)
            // assert
            expect(actual).toBe(expected);
        })

        it('given player move scissors and opponent move rock should return player loses', () => {
            // arrange
            const playerMove = Move.Scissors;
            const opponentMove = Move.Rock;
            const expected = Outcome.PlayerLoses;
            const sut = createPaperRockScissors();
            // act
            const actual = sut.play(playerMove, opponentMove)
            // assert
            expect(actual).toBe(expected);
        })
       })

        describe('tie', () => {
            it('given player move scissors and opponent move scissors  should return tie', () => {
                // arrange
                const playerMove = Move.Scissors;
                const opponentMove = Move.Scissors;
                const expected = Outcome.Tie;
                const sut = createPaperRockScissors();
                // act
                const actual = sut.play(playerMove, opponentMove)
                // assert
                expect(actual).toBe(expected);
            })
    
            it('given player move scissors and opponent move scissors  should return tie', () => {
                // arrange
                const playerMove = Move.Paper;
                const opponentMove = Move.Paper;
                const expected = Outcome.Tie;
                const sut = createPaperRockScissors();
                // act
                const actual = sut.play(playerMove, opponentMove)
                // assert
                expect(actual).toBe(expected);
            })
    
            it('given player move scissors and opponent move scissors  should return tie', () => {
                // arrange
                const playerMove = Move.Rock;
                const opponentMove = Move.Rock;
                const expected = Outcome.Tie;
                const sut = createPaperRockScissors();
                // act
                const actual = sut.play(playerMove, opponentMove)
                // assert
                expect(actual).toBe(expected);
            })
        })
       })
})