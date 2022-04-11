import { Block } from "./block";
import cryptoHash from "../utils/crypto-hash";

export class Blockchain {
  chain: Array<Block>;
  constructor() {
    this.chain = [Block.genesis()];
  }

  addBlock({ data }: { data: Array<any> }): void {
    const timestamp = Date.now();
    const newBlock = Block.mineBlock({
      lastBlock: this.chain[this.chain.length - 1],
      data,
    });

    this.chain.push(newBlock);
  }
}
