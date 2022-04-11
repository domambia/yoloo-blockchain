import { GENESIS_BLOCK } from "./../config/index";
import cryptoHash from "../utils/crypto-hash";
export class Block {
  timestamp: any;
  lastHash: string;
  hash: string;
  data: any;
  constructor({
    timestamp,
    lastHash,
    hash,
    data,
  }: {
    timestamp: any;
    lastHash: string;
    hash: string;
    data: any;
  }) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }

  static genesis() {
    return new this({ ...GENESIS_BLOCK });
  }

  static mineBlock({
    lastBlock,
    data,
  }: {
    lastBlock: Block;
    data: Array<any>;
  }) {
    const timestamp = Date.now;
    return new this({
      timestamp: timestamp,
      lastHash: lastBlock.hash,
      data: data,
      hash: cryptoHash(timestamp, lastBlock.hash, data),
    });
  }
}
