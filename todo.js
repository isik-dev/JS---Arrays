const todos = ['Go out for dinner with friends', 'Get my car washed', 'Finish the project on python', 'Prepare for tommorows class', 'Sleep']

// Delete the third item
// Add a new item onto the end
// Remove the first item from the list

todos.splice(2,1)
todos.push('Buy MacBook Pro')
todos.shift()


console.log(`You have ${todos.length} todos`)
console.log(todos)

