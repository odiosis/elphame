const utils = require('../../utils')

module.exports = path => {
  path = utils.path.cwd(path || '.')
  console.log(path)
}
