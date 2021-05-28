const notes = [{}, {
    title: 'My next trip',
    body: 'I would like to go to Switzerland'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modifications',
    body: 'Get a new seat'
}]

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

const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return notes[index]
}

const note = findNote(notes, 'Office modifications')
console.log(note)

// const index = notes.findIndex(function (note, index) {
//     console.log(note)
//     return note.title === 'Habits to work on'
// })
// console.log(index)