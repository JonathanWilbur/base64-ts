const base64 = require("../../dist/index.js");
const crypto = require("crypto");
const fs = require("fs");

test("valid base-64 decodes correctly", () => {
    const b1 = fs.readFileSync("./test/data/1.b64", { encoding: "utf8" }).replace(/\s+/ug, "");
    expect(() => base64.decode(b1)).not.toThrow();

    const b2 = fs.readFileSync("./test/data/2.b64", { encoding: "utf8" }).replace(/\s+/ug, "");
    expect(() => base64.decode(b2)).not.toThrow();
});

test("this library encodes and decodes base-64 with exactly the same results as NodeJS's Buffer", () => {
    const testeroo = crypto.randomBytes(233);
    const nodeEncoding = testeroo.toString("base64");
    const libraryEncoding = base64.encode(new Uint8Array(testeroo))
    expect(nodeEncoding).toEqual(libraryEncoding);
    const nodeDecoding = base64.decode(nodeEncoding);
    const libraryDecoding = base64.decode(libraryEncoding);
    expect(nodeDecoding).toEqual(libraryDecoding);
});
