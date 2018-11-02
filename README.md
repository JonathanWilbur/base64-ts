# Base64 TypeScript Library

* Author: [Jonathan M. Wilbur](https://jonathan.wilbur.space) <[jonathan@wilbur.space](mailto:jonathan@wilbur.space)>
* Copyright Year: 2018
* License: [MIT License](https://mit-license.org/)
* Version: _See `version` file or git tags._
* Platform: NodeJS or Modern Web Browsers

## Building

You can build this library by running:

* `webpack --config build/webpack/web.webpack.js`
* `webpack --config build/webpack/node.webpack.js`

The outputs will all be in `dist`.

* `./dist/base64.web.min.js` is the entire library for the web browser, which is minified.
* `./dist/base64.node.js` is the entire NodeJS library.

## Library Usage

There are two functions: `encode` and `decode`. See the declaration below:

```typescript
export declare function decode(base64: string): Uint8Array;
export declare function encode(bytes: Uint8Array): string;
```

## Contact Me

If you would like to suggest fixes or improvements on this library, please just
[leave an issue on this GitHub page](https://github.com/JonathanWilbur/base64-ts/issues). If you would like to contact me for other reasons,
please email me at [jonathan@wilbur.space](mailto:jonathan@wilbur.space)
([My GPG Key](https://jonathan.wilbur.space/downloads/jonathan@wilbur.space.gpg.pub))
([My TLS Certificate](https://jonathan.wilbur.space/downloads/jonathan@wilbur.space.chain.pem)). :boar: