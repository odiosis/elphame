const fs = require('fs')
const utils = require('../../utils')

module.exports = target => {
  const path = utils.path.cwd(target || '.')

  if (fs.existsSync(path)) {
    console.log(path)
  }
}
