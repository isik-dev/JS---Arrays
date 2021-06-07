// // const notes = [{}, {
// //     title: 'My next trip',
// //     body: 'I would like to go to Switzerland'
// // }, {
// //     title: 'Habits to work on',
// //     body: 'Exercise. Eating a bit better'
// // }, {
// //     title: 'Office modifications',
// //     body: 'Get a new seat'
// // }]

// // //pop method removes a value from the end of our array
// // console.log(notes.pop())

// // //push method adds a value on to the end of our array
// // notes.push('My new note') 

// // //shift method removes a value from the start of our array
// // console.log(notes.shift())

// // //unshift method adds a value to the beginning of our array
// // notes.unshift('My first note')


// // notes.splice(1, 1, 'This is the new second item')

// // notes[2]  = 'This is now a new note three'


// // notes.forEach(function (item, index) {
// //     console.log(index)
// //     console.log(item)
// // })


// // console.log(notes)
// // console.log(notes[notes.length - 1])
// // Counting... 1 
// // for (let count = 2; count >= 0; count --) {
// //     console.log(count)
// // }

// // for (let count = notes.length - 1; count >= 0; count --) {
// //     console.log(notes[count])
// // }


// // const index = notes.findIndex(function (note, index) {
// //     console.log(note)
// //     return note.title === 'Habits to work on'
// // })
// // console.log(index)

// const notes = [{
//     title: 'Python',
//     body: 'Pycharm'
// }, {
//     title: 'JavaScript',
//     body: 'VSCode'
// }, {
//     title: 'HTML',
//     body: 'ATOM'
// }]


// const findNotes = function (notes, query) {
//     return notes.filter(function (note, index) {
//         const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
//         const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
//         return isTitleMatch || isBodyMatch  
//     })
// }

// console.log(findNotes(notes, 'arm'))







// // const findNote = function (array, noteTitle) {
// //     const index = array.findIndex(function (element, index) {
// //         return element.title.toLowerCase() === noteTitle.toLowerCase()
// //     })
// //     return array[index]
// // }


// // console.log(notes.length)
// // console.log(notes)

// // // console.log(notes.indexOf({}))

// // // let someObject = {}
// // // let otherObject = someObject
// // // console.log(someObject === otherObject)

// // const index = notes.findIndex(function (note, index) {
// //     console.log(note)
// //     return note.title === 'Python'
// // })
// // console.log(index)


const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: ' Exercise. Eating a bit better'
}, {
    title: 'Office modifications',
    body: 'Get a new seat'
}]

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}


const findNote = function (array, objectTitle) {
    return notes.find(function (item, index) {
        return item.title.toLowerCase() === objectTitle.toLowerCase()
    })
}

const findNotes = function(notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

// console.log(findNotes(notes, 'work'))

// const note = findNote(notes, 'office modifications')
// console.log(note)

sortNotes(notes)
console.log(notes)