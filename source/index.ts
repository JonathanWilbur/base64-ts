import { BASE64_VALUE_TO_CHAR_CODE, CHAR_CODE_TO_BASE64_VALUE } from "./data";

// TODO: Make a custom Base64Error

const ENCODING_CHUNK_LENGTH: number = 16383;

function encodingLengthOf (base64: string): number {
    const indexOfPadding: number = base64.indexOf("=");
    return (indexOfPadding === -1 ? base64.length : indexOfPadding);
}

function paddingLengthOf (base64: string, encodingLength? : number): number {
    if (!encodingLength) encodingLength = encodingLengthOf(base64);
    if (encodingLength < 0) throw new Error("Base64 encoding length cannot be negative.");
    if (!Number.isInteger(encodingLength)) throw new Error("Base64 encoding length must be integral.");
    return ((encodingLength === base64.length) ? 0 : (4 - (encodingLength % 4)));
}

function lengthOfEncodedDataIn (base64: string): number {
    const encodingLength: number = encodingLengthOf(base64);
    const paddingLength: number = paddingLengthOf(base64, encodingLength);
    return (((encodingLength + paddingLength) * 0.75) - paddingLength);
}

export
function decode (base64: string): Uint8Array {
    if (base64.length % 4 > 0) throw new Error("Base64 string with length not divisible by four.");
    const encodingLength: number = encodingLengthOf(base64);
    const paddingLength: number = paddingLengthOf(base64, encodingLength);
    const ret: Uint8Array = new Uint8Array(lengthOfEncodedDataIn(base64));
    let currentByte: number = 0;
    const fullQuartetsLength: number = (paddingLength ? (encodingLength - 4) : encodingLength);

    let temp: number = 0;
    let i: number = 0;
    while (i < fullQuartetsLength) {
        temp
            = (CHAR_CODE_TO_BASE64_VALUE[base64.charCodeAt(i)] << 18)
            | (CHAR_CODE_TO_BASE64_VALUE[base64.charCodeAt(i + 1)] << 12)
            | (CHAR_CODE_TO_BASE64_VALUE[base64.charCodeAt(i + 2)] <<  6)
            | CHAR_CODE_TO_BASE64_VALUE[base64.charCodeAt(i + 3)];
        ret[currentByte++] = ((temp >> 16) & 0xFF);
        ret[currentByte++] = ((temp >>  8) & 0xFF);
        ret[currentByte++] = ((temp) & 0xFF);
        i += 4;
    }

    if (paddingLength > 2) {
        throw new Error("Invalid number of padding bytes returned for Base64 string.");
    } else if (paddingLength === 2) {
        temp
            = (CHAR_CODE_TO_BASE64_VALUE[base64.charCodeAt(i)] << 2)
            | (CHAR_CODE_TO_BASE64_VALUE[base64.charCodeAt(i + 1)] >> 4)
        ret[currentByte++] = (temp & 0xFF);
    } else if (paddingLength === 1) {
        temp
            = (CHAR_CODE_TO_BASE64_VALUE[base64.charCodeAt(i)] << 10)
            | (CHAR_CODE_TO_BASE64_VALUE[base64.charCodeAt(i + 1)] <<  4)
            | (CHAR_CODE_TO_BASE64_VALUE[base64.charCodeAt(i + 2)] >>  2)
        ret[currentByte++] = ((temp >> 8) & 0xFF);
        ret[currentByte++] = ((temp) & 0xFF);
    }

    return ret;
}

// TODO: Change the parameters to something more strongly-typed.
function tripletToBase64 (num: number): string {
    return (
        BASE64_VALUE_TO_CHAR_CODE[(num >> 18) & 0x3F]
        + BASE64_VALUE_TO_CHAR_CODE[(num >> 12) & 0x3F]
        + BASE64_VALUE_TO_CHAR_CODE[(num >> 6) & 0x3F]
        + BASE64_VALUE_TO_CHAR_CODE[num & 0x3F]
    );
}

export
function encode (bytes: Uint8Array): string {
    if (bytes.length < ENCODING_CHUNK_LENGTH) {
        const numberOfModularBytes: number = (bytes.length % 3);
        const base64Quartets: string[] = [];
        for (let i = 0; i < bytes.length; i += 3) {
            base64Quartets.push(tripletToBase64(
                ((bytes[i    ] << 16) & 0xFF0000)
                + ((bytes[i + 1] <<  8) &   0xFF00)
                + ((bytes[i + 2]) &     0xFF)
            ));
        }

        if (numberOfModularBytes === 1) {
            const temp: number = bytes[bytes.length - 1];
            base64Quartets.push(
                BASE64_VALUE_TO_CHAR_CODE[(temp >> 2)       ]
                + BASE64_VALUE_TO_CHAR_CODE[(temp << 4) & 0x3F]
                + "=="
            );
        } else if (numberOfModularBytes === 2) {
            const temp: number = (bytes[bytes.length - 2] << 8) + bytes[bytes.length - 1];
            base64Quartets.push(
                BASE64_VALUE_TO_CHAR_CODE[(temp >> 10)       ]
                + BASE64_VALUE_TO_CHAR_CODE[(temp >>  4) & 0x3F]
                + BASE64_VALUE_TO_CHAR_CODE[(temp <<  2) & 0x3F]
                + "="
            );
        }

        return base64Quartets.join("");
    } else {
        const parts: string[] = [];
        for (let i: number = 0; i < bytes.length; i += ENCODING_CHUNK_LENGTH) {
            parts.push(encode(bytes.slice(i, i + ENCODING_CHUNK_LENGTH)));
        }
        return parts.join("");
    }
}
