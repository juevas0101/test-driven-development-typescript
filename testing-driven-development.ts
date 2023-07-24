export enum Move {
    Paper,
    Rock,
    Scissors,
}

export enum Outcome {
    PlayerWins,
    PlayerLoses,
    Tie,
}

interface RockPaperScissors {
    play(playerMove: Move, opponentMove: Move): Outcome
}

export function createPaperRockScissors (): RockPaperScissors {
  const scenarios = new Array(
    {playerMove: Move.Scissors, opponentMove: Move.Paper,  outcome: Outcome.PlayerWins},
    {playerMove: Move.Scissors, opponentMove: Move.Rock,  outcome: Outcome.PlayerLoses},
    {playerMove: Move.Rock, opponentMove: Move.Scissors,  outcome: Outcome.PlayerWins},
    {playerMove: Move.Rock, opponentMove: Move.Paper,  outcome: Outcome.PlayerLoses},
    {playerMove: Move.Paper, opponentMove: Move.Rock,  outcome: Outcome.PlayerWins},
    {playerMove: Move.Paper, opponentMove: Move.Scissors,  outcome: Outcome.PlayerLoses},
  
    )
   return {
    play(playerMove: Move, opponentMove: Move): Outcome {
      if(playerMove === opponentMove) {
        return Outcome.Tie;
     }

      const result = scenarios.find( scenarios => scenarios.playerMove === playerMove && scenarios.opponentMove === opponentMove);

      return  (result) ? result.outcome : Outcome.Tie;
    }
   }
}