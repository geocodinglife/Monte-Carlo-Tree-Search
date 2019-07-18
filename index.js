const util       = require('util')
const Game_C4    = require('./game-c4.js')
const MonteCarlo = require('./monte-carlo.js')

// Setup
let game   = new Game_C4()
let mcts   = new MonteCarlo(game)
console.log(mcts)
let state  = game.start()
let winner = game.winner(state)

// From initial state, take turns to play game until someone wins
while (winner === null) {
  console.log()
  console.log("player: " + (state.player === 1 ? 1 : 2))
  console.log(state.board.map((row) => row.map((cell) => cell === -1 ? 2 : cell)))

  mcts.runSearch(state, 1)

  let stats = mcts.getStats(state)
  console.log(util.inspect(stats, {showHidden: false, depth: null}))

  let play = mcts.bestPlay(state, "robust")
  console.log("chosen play: " + util.inspect(play, {showHidden: false, depth: null}))

  state    = game.nextState(state, play)
  winner   = game.winner(state)
}

console.log()
console.log("Winner: " + (winner === 1 ? 1 : 2))
console.log(state.board.map((row) => row.map((cell) => cell === -1 ? 2 : cell)))
console.log(winner)
