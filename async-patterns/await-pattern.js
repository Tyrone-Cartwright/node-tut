const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


// create a start fn which is setup  as a sync fn  then  
// attach await and will only resp once the promise is settled

// ASYNC-AWAIT
const start = async() => {
  try {
    const first = await readFile('./content/first.txt', 'utf8')
    const second = await readFile('./content/second.txt', 'utf8')
    await writeFile(
      './content/result-mind-grenade.txt', 
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: 'a' }
    )
    console.log(first, second)
  } catch (error) {
    console.log(error)
  }  
}

start()

// WRAPPER FUNCTION
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if( err ) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }

// CONSUME PROMISES
// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))