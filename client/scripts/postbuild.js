const fse = require('fs-extra')

fse.copy('./build/static', '../TodoHost/TodoHost/Content')
    .then(() => console.log('copied files'))
    .catch(err => console.error(err))