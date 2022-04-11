import crypto from "crypto";
const cryptoHash = (...inputs: Array<any>) => {
  const hash = crypto.createHash("sha256").update(inputs.sort().join(" "));

  return hash.digest("hex");
};

export default cryptoHash;
