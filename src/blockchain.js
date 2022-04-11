const Block = require("./block");
const cryptoHash = require("./crypto-hash");

class Blockchain {
  constructor() {
    this.chain = [Block.genesis()];
  }

  addBlock({ data }) {
    const timestamp = Date.now();
    const newBlock = Block.mineBlock({
      timestamp: timestamp,
      lastBlock: this.chain[this.chain.length - 1].hash,
      data,
      hash: cryptoHash(timestamp, this.chain[this.chain.length - 1], data),
    });

    this.chain.push(newBlock);
  }
}

module.exports = Blockchain;
