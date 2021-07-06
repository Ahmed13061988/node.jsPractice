const { readFileSync, writeFileSync} = require("fs"); 

const first = readFileSync('./content/first.txt', 'utf8')

const second = readFileSync('./content/subfolder/second.txt', 'utf8')

writeFileSync('./content/result.txt', `Here are the results: ${first}, ${second}`)