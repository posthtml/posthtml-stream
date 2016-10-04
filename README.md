[![NPM][npm]][npm-url]
[![Deps][deps]][deps-url]
[![Tests][build]][build-url]
[![Coverage][cover]][cover-url]
[![Standard Code Style][style]][style-url]
[![Chat][chat]][chat-badge]

# PostHTML Stream <img align="right" width="200" height="220" title="PostHTML" src="http://posthtml.github.io/posthtml/logo.svg">

## Install

```bash
npm i -S posthtml-stream
```
## Usage

### Options

**`chunks`**: `[Regex]` Chunk Matcher (Passthrough)

**`plugins`**: `[Array]` PostHTML Plugins

**`options`**: `[Object]` PostHTML Options

### Chunks

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>PostHTML Stream</title>
</head>

<body>
<!-- chunk -->
  <header></header>
  <!-- chunk -->
  <main></main>
  <!-- chunk -->
  <footer></footer>
<!-- chunk -->
</body>
</html>
```

```js
createReadStream('index.html')
  .pipe(split('<!-- chunk -->'))
  .pipe(posthtml(/head/, plugins, options))
  .pipe(createWriteStream('result.html'))
```

```txt
                   --------------------> /head/ ---------------------->
src ---> split ---> posthtml(/head/, plugins, options) -------------> dest
```

## Maintainers

<table>
  <tbody>
   <tr>
    <td align="center">
      <img width="150 height="150"
      src="https://avatars.githubusercontent.com/u/5419992?v=3&s=150">
      <br />
      <a href="https://github.com/michael-ciniawsky">Michael Ciniawsky</a>
    </td>
   </tr>
  <tbody>
</table>

## Contributing

See [PostHTML Guidelines](https://github.com/posthtml/posthtml/tree/master/docs) and [CONTRIBUTING](CONTRIBUTING.md).

## LICENSE

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/posthtml-stream.svg
[npm-url]: https://npmjs.com/package/posthtml-stream

[deps]: https://david-dm.org/posthtml/posthtml-stream.svg
[deps-url]: https://david-dm.org/posthtml/posthtml-stream

[build]: http://img.shields.io/travis/posthtml/posthtml-stream.svg
[build-url]: https://travis-ci.org/posthtml/posthtml-stream

[cover]: https://coveralls.io/repos/github/posthtml/posthtml-stream/badge.svg?branch=master
[cover-url]: https://coveralls.io/github/posthtml/posthtml-stream?branch=master

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[chat]: https://badges.gitter.im/posthtml/posthtml.svg
[chat-badge]: https://gitter.im/posthtml/posthtml?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge"
