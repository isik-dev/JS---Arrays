// // const todos = ['Go out for dinner with friends', 'Get my car washed', 'Finish the project on python', 'Prepare for tommorows class', 'Sleep']

// // todos.splice(2,1)
// // todos.push('Buy MacBook Pro')
// // todos.shift()


// // console.log(`You have ${todos.length} todos`)


// // todos.forEach(function (item, index) {
// //     console.log(`${index + 1}. ${item}`)
// // })

// // // 1. The first item
// // // 2. The second item
// // // ...

// // for (let count = 0; count < todos.length; count ++ ) {
// //     console.log(`${count + 1}. ${todos[count]}`)
// // }

// // for (let count = todos.length - 1; count >= 0; count --) {
// //     const num = count + 1
// //     const index =  todos[count]
// //     console.log(`${num}. ${index}`)
// // }

// // 1. Convert array to array of objects -> text, completed
// todos = [{
//     text: 'Morning Stretching',
//     status: 'complete'
// }, {
//     text: 'Python',
//     status: 'complete'
// }, {
//     text: 'Grocery Shopping',
//     status: 'incomplete'
// }, {
//     text: 'Cleaning My Room',
//     status: 'incomplete'
// }, {
//     text: 'Look For A New House',
//     status: 'incomplete'
// }]

// // 2. Create function to remove a todo by text value

// const deleteTodo = function (array, elementText) {
//     const index = array.findIndex(function (element, index) {
//         return element.text.toLowerCase() === elementText.toLowerCase()
//     })
//     if (array[index]['status'] === 'complete') {
//         array.splice(index,1)
//     }
// }

// const incompleteTodos = function (array) {
//     return array.filter(function (array) {
//         // const isBodyMatch = array.status.toLowerCase().includes('incomplete')
//         // return isBodyMatch
//         return array.status === 'complete'
//     })
// }

// incompleteList = incompleteTodos(todos)
// console.log(incompleteList)






// // deleteTodo(todos, 'Python')
// // console.log(todos)


// Create an array with five todos
// You have x todos
// Print the first and second to last items -> Todo: walk the dog


const todos = ['Buy grocery', 'Do homework', 'Clean the room', 'Workout', 'Read KGB']

todos.splice(2, 1)
todos.push('Buy coffee')
todos.shift()

console.log(`You have ${todos.length} todos! `)

// 1. The first item
// 2. The second item

todos.forEach(function (item, index) {
    const itemIndex = index + 1
    console.log(`${itemIndex}. ${item}`) // or we can do: console.log(`${index + 1}. ${item}`)
})


// 1. The first item
// 2. The second item
// ...

for (let count = 0; count < todos.length; count++) {
    console.log(`${count + 1}. ${todos[count]}`)
}