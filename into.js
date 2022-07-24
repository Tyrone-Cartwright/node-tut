// GLOBALS  - NO WINDOW !!!! - can access globals anywhere

const { clear } = require("console")

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

setInterval(() => {
  console.log('Hello world!')
}, 1000)