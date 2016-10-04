const test = require('ava')

const createReadStream = require('fs').createReadStream
const readFileSync = require('fs').readFileSync

const split = require('split')
const posthtml = require('..')

test('Stream', (t) => {
  console.time('Stream')
  createReadStream('./fixtures/index.html')
    .pipe(split('<!-- chunk -->'))
    .pipe(posthtml(
      /(head|body)/,
      [ require('posthtml-bem')() ]
    ))
    .on('data', (html) => {
      t.is(readFileSync('./expect/index.html'), html)
    })
})

test('Stream with Options', (t) => {
  createReadStream('./fixtures/index.pug')
    .pipe(split('<!-- chunk -->'))
    .pipe(posthtml(
      /(head|body)/,
      [ require('posthtml-bem')() ],
      { parser: require('posthtml-pug')({ pretty: true }) }
    ))
    .on('data', (html) => {
      t.is(readFileSync('./expect/index.html'), html)
    })
})
