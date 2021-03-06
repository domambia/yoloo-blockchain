import { GENESIS_BLOCK } from "./../config/index";
import { Block } from "./../blockchain/block";
import cryptoHash from "./../utils/crypto-hash";

describe("Block", () => {
  const timestamp = "2020-01-01";
  const lastHash = "last-hash";
  const hash = "hash";
  const data = "{data}";

  const block = new Block({ timestamp, lastHash, hash, data });

  it("has a timestamp, lastHash, hash, and data property", () => {
    expect(block.timestamp).toEqual(timestamp);
    expect(block.lastHash).toEqual(lastHash);
    expect(block.hash).toEqual(hash);
    expect(block.data).toEqual(data);
  });

  describe("genesis()", () => {
    const genesisBlock = Block.genesis();

    it("returns a block instance", () => {
      expect(genesisBlock instanceof Block).toBe(true);
    });

    it("returns the genesis data", () => {
      expect(genesisBlock).toEqual(GENESIS_BLOCK);
    });
  });

  describe("mine block", () => {
    const lastBock = Block.genesis();
    const data = ["some data"];
    const minedBlock = Block.mineBlock({ lastBlock: lastBock, data });
    expect(minedBlock instanceof Block).toBe(true);

    it("sets the `lastHash` to be the `hash`  of the lastBlock", () => {
      expect(minedBlock.lastHash).toEqual(lastBock.hash);
    });

    it("sets the hash of the new block", () => {
      expect(minedBlock.hash).toEqual(
        cryptoHash(minedBlock.timestamp, lastBock.hash, data)
      );
    });

    it("sets the data", () => {
      expect(minedBlock.data).toEqual(data);
    });

    it("sets a timestamp", () => {
      expect(minedBlock.timestamp).not.toEqual(undefined);
    });
  });
});
