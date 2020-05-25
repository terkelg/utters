# Utters
> Small (257B) promise wrapper for SpeechSynthesisUtterance

## Install

```
$ npm install utters
```

This module is delivered as:

* **ES Module**: [`dist/index.mjs`](https://unpkg.com/utters/dist/index.mjs)
* **UMD**: [`dist/utters.umd.js`](https://unpkg.com/utters/dist/utters.umd.js)
* **UMD Minified**: [`dist/utters.umd.min.js`](https://unpkg.com/utters/dist/utters.umd.min.js)

## Usage

```js
import utters from 'utters';

function speak() {

  // string input
  await utters(`Hello World`);
            
  // SpeechSynthesisUtterance input
  await utters(new SpeechSynthesisUtterance(`Hello World`));

  console.log(`Done!`);
}
```

## API

### utters(input)
Type: `string|SpeechSynthesisUtterance`<br>
Returns: `Promise<SpeechSynthesisUtterance>`


## License

MIT © [Terkel Gjervig](https://terkel.com)