// const notes = [{}, {
//     title: 'My next trip',
//     body: 'I would like to go to Switzerland'
// }, {
//     title: 'Habits to work on',
//     body: 'Exercise. Eating a bit better'
// }, {
//     title: 'Office modifications',
//     body: 'Get a new seat'
// }]

// //pop method removes a value from the end of our array
// console.log(notes.pop())

// //push method adds a value on to the end of our array
// notes.push('My new note') 

// //shift method removes a value from the start of our array
// console.log(notes.shift())

// //unshift method adds a value to the beginning of our array
// notes.unshift('My first note')


// notes.splice(1, 1, 'This is the new second item')

// notes[2]  = 'This is now a new note three'


// notes.forEach(function (item, index) {
//     console.log(index)
//     console.log(item)
// })


// console.log(notes)
// console.log(notes[notes.length - 1])
// Counting... 1 
// for (let count = 2; count >= 0; count --) {
//     console.log(count)
// }

// for (let count = notes.length - 1; count >= 0; count --) {
//     console.log(notes[count])
// }


// const index = notes.findIndex(function (note, index) {
//     console.log(note)
//     return note.title === 'Habits to work on'
// })
// console.log(index)

const notes = [{
    title: 'Python',
    body: 'Pycharm'
}, {
    title: 'JavaScript',
    body: 'VSCode'
}, {
    title: 'HTML',
    body: 'ATOM'
}]

// const findNote = function (array, noteTitle) {
//     const index = array.findIndex(function (element, index) {
//         return element.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return array[index]
// }

const findNote = function (array, noteTitle) {
    return array.find(function (element, index) {
        return element.title.toLowerCase() === noteTitle.toLowerCase()
    })
}   

const note = findNote(notes, 'HTML')
console.log(note)









// console.log(notes.length)
// console.log(notes)

// // console.log(notes.indexOf({}))

// // let someObject = {}
// // let otherObject = someObject
// // console.log(someObject === otherObject)

// const index = notes.findIndex(function (note, index) {
//     console.log(note)
//     return note.title === 'Python'
// })
// console.log(index)