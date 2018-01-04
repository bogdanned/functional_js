const fs = require('fs')
const Task = require('data.task')
const futurize = require('futurize').futurize(Task)
const { List } = require('immutable-ext')

const readFile = futurize(fs.readFile)

const files = ['box.js', 'config.json']

const res = files.map(fname => readFile(fname, 'utf8'))

console.log(res)

[Task] => Task([]) 

