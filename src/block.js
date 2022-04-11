const GENESIS_BLOCK = require("./config");
const cryptoHash = require("./crypto-hash");

class Block {
  constructor({ timestamp, lastHash, hash, data }) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }

  static genesis() {
    return new this({ ...GENESIS_BLOCK });
  }

  static mineBlock({ lastBlock, data }) {
    const timestamp = Date.now;
    return new this({
      timestamp: timestamp,
      lastBlock: lastBlock,
      data: data,
      hash: cryptoHash(timestamp, lastBlock, data),
    });
  }
}

module.exports = Block;
