class State_C4 {
  constructor(playHistory, board, player) {
    this.playHistory = playHistory
    this.board       = board
    this.player      = player
  }

  isPlayer(player) {
    return (player === this.player)
  }

  hash() {
    return JSON.stringify(this.playHistory)
  }

  // Note: if hash uses board, multiple parents possible
}

module.exports = State_C4
