const { resolve } = require('path')

exports.cwd = function (path) {
  return resolve(process.cwd(), path || '.')
}
