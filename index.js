const Transform = require('stream').Transform

const posthtml = require('posthtml')

/**
 * @author Michael Ciniawsky @michael-ciniawsky <michael.ciniawsky@gmail.com>
 * @description Stream Wrapper for PostHTML
 *
 * @module posthtml-stream
 *
 * @requires stream
 * @requires posthtml
 *
 * @method posthtmlStream
 *
 * @param  {Regex} chunks Chunk Matcher (Passthrough)
 * @param  {Array} plugins PostHTML Plugins
 * @param  {Object} options PostHTML Options
 *
 * @return {Stream}
 */
module.exports = function posthtmlStream (chunks, plugins, options) {
  plugins = plugins || []
  options = options || {}

  const stream = new Transform()

  stream._transform = (chunk, enc, cb) => {
    if (chunks !== null && chunk.toString().match(chunks)) {
      cb(null, chunk)
    } else {
      posthtml(plugins)
        .process(chunk.toString(), options)
        .then((result) => cb(null, result.html))
    }
  }

  return stream
}
