const fs = require('fs')
const consola = require('consola')
const utils = require('../../utils')

module.exports = target => {
  const path = utils.path.cwd(target || '.')

  consola.start('Creating...')
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path)
  }
  fs.writeFile(path + '/README.md', '# Hello\n', err => {
    if (err) return
    consola.success('Done!')
  })
}
