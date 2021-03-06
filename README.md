# Base64 TypeScript Library

* Author: [Jonathan M. Wilbur](https://jonathan.wilbur.space) <[jonathan@wilbur.space](mailto:jonathan@wilbur.space)>
* Copyright Year: 2019
* License: [MIT License](https://mit-license.org/)
* Platform: NodeJS or Modern Web Browsers

## DEPRECATION NOTICE

I will probably never delete this repository, just so I do not break anything,
but I have decided that it makes no sense to even have this. You should use the
[Base-64 Library](https://www.npmjs.com/package/base64-js)
[recommended by Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Solution_5_%E2%80%93_rewrite_the_DOMs_atob()_and_btoa()_using_JavaScript's_TypedArrays_and_UTF-8)
instead. Types for `base64-js` can be installed by running
`npm install @types/base64-js`.

For the rest of this repository's life, it will simply be a wrapper to
`base64-js`.

## Building

You can build this library by running `npm run build`.

The outputs will all be in `dist`.

## Library Usage

There are two functions: `encode` and `decode`. See the declaration below:

```typescript
export declare function decode(base64: string): Uint8Array;
export declare function encode(bytes: Uint8Array): string;
```

`decode` _does not_ tolerate whitespace. _Only_ base-64 characters must be supplied.

## Contact Me

If you would like to suggest fixes or improvements on this library, please just
[leave an issue on this GitHub page](https://github.com/JonathanWilbur/base64-ts/issues). If you would like to contact me for other reasons,
please email me at [jonathan@wilbur.space](mailto:jonathan@wilbur.space)
([My GPG Key](https://jonathan.wilbur.space/downloads/jonathan@wilbur.space.gpg.pub))
([My TLS Certificate](https://jonathan.wilbur.space/downloads/jonathan@wilbur.space.chain.pem)). :boar:
