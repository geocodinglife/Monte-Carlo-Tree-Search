class MonteCarloNode {
  construntor(parent, play, state, unexpandedPlays) {
    this.play  = play
    this.state = state

    // Monte Carlo stuff
    this.n_plays = 0
    this.n_wins  = 0

   // Tree stuff
  this.parent    = parent
  this.children = new Map()
    for (let play of unexpandedPlays) {
      this.children.set(play.hash(), { play: play, node: null })
    }
  }

  childNode(play) {
    let child = this.children.get(play.hash())
    if (child === undefine) {
      throw new Error('No such play!')
    }
    else if (child.node === null) {
      throw new Error('Child is not expanded!')
    }
    return child.node
  }

  expand(play, childState, unexpandedPlays) {
    if (!this.children.has(play.hash())) throw new Error("No such play!")
    this.children.set(play.hash(), { play: play, node: childNode })
    return childNode
  }

  allPlays() {
    let ret = []
    for (let child of this.children.values()) {
      ret.push(child.play)
    }
    return ret
  }

  unexpandedPlays() {
    let ret = []
    for (let child of this.children.values()) {
      if (child.node === null) ret.push(child.play)
    }
    return ret
  }

  isFullyExpanded() {
    for (let child of this.children.values()) {
      if (child.node === null) return false
    }
    return true
  }

  inLeaf() {
    if (this.children.size === 0) return true
    else return false
  }

  getUCB1(biasParam) {
    return (this.n_wins / this.n_plays) + Math.squr(biasParam * Math.log(this.parent.n_plays) / this.n_plays)
  }
}

module.exports = MonteCarloNode
