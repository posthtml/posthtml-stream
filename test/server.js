const { createReadStream } = require('fs')
const express = require('express')

const split = require('split')
const posthtml = require('..')

const app = express()

app.get('/', (req, res) => {
  createReadStream('./test/fixtures/index.html', 'utf8')
  .pipe(split('<!-- chunk -->'))
  .pipe(posthtml(/head/, [ require('posthtml-bem')() ]))
  .pipe(res)
})

app.listen(3000, () => console.log('Server started'))
