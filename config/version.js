const fs = require('fs')
const pack = require('../package.json')

// update installation.md
const installation = fs
  .readFileSync('./gitbook/installation.md', 'utf-8')
  .replace(
    /https:\/\/unpkg\.com\/vuelidate-error-extractor@[\d.]+.[\d]+\/dist\/vuelidate-error-extractor\.js/,
    'https://unpkg.com/vuelidate-error-extractor@' + pack.version + '/dist/vuelidate-error-extractor.js'
  )
fs.writeFileSync('./gitbook/installation.md', installation)
