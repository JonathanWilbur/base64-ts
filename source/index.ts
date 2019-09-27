import { fromByteArray, toByteArray } from "base64-js";

export
function decode (base64: string): Uint8Array {
    return toByteArray(base64);
}

export
function encode (bytes: Uint8Array): string {
    return fromByteArray(bytes);
}
