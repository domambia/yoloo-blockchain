const crypto = require("crypto");

const cryptoHash = (...inputs) => {
  const hash = crypto.createHash("sha256").update(inputs.sort().join(" "));

  return hash.digest("hex");
};

module.exports = cryptoHash;
