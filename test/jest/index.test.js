const base64 = require("../../dist/index.js");
const fs = require("fs");

test("valid base-64 decodes correctly", () => {
    const b1 = fs.readFileSync("./test/data/1.b64", { encoding: "utf8" }).replace(/\s+/ug, "");
    expect(() => base64.decode(b1)).not.toThrow();

    const b2 = fs.readFileSync("./test/data/2.b64", { encoding: "utf8" }).replace(/\s+/ug, "");
    expect(() => base64.decode(b2)).not.toThrow();
});

