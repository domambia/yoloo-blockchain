import cryptoHash from "./../utils/crypto-hash";

describe("crypto-hash", () => {
  it("should return a SHA256 hashed output", () => {
    expect(cryptoHash("foo")).toEqual(
      "2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae"
    );
  });

  it("returns the same output for the same input in any order", () => {
    expect(cryptoHash("there", "hello", "nice")).toEqual(
      cryptoHash("nice", "hello", "there")
    );
  });
});
