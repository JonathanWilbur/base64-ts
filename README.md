# Base64 TypeScript Library

* Author: [Jonathan M. Wilbur](https://jonathan.wilbur.space) <[jonathan@wilbur.space](mailto:jonathan@wilbur.space)>
* Copyright Year: 2019
* License: [MIT License](https://mit-license.org/)
* Platform: NodeJS or Modern Web Browsers

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
