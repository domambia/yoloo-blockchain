import { Blockchain } from "./../blockchain/blockchain";
import { GENESIS_BLOCK } from "./../config";
import { Block } from "./../blockchain/block";
import cryptoHash from "./../utils/crypto-hash";

describe("Blockchain", () => {
  const blockchain = new Blockchain();

  it("contains  a `chain`  of blocks", () => {
    expect(blockchain.chain instanceof Array).toBe(true);
  });

  it("starts with a genesis block", () => {
    expect(blockchain.chain[0]).toEqual(Block.genesis());
  });

  it("adds a new block to the chain", () => {
    const data = ["some data"];
    blockchain.addBlock({ data });

    expect(blockchain.chain[blockchain.chain.length - 1].data).toEqual(data);
  });
});
