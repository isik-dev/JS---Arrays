const todos = ['Go out for dinner with friends', 'Get my car washed', 'Finish the project on python', 'Prepare for tommorows class', 'Sleep']

todos.splice(2,1)
todos.push('Buy MacBook Pro')
todos.shift()


console.log(`You have ${todos.length} todos`)
console.log(todos)

