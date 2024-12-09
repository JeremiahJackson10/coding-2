// What is a function?
'A function is a set of instructions that preoforms a specific task'

// There are two variations of functions:
// Built-In functions: these are function instructions that
//are already in the programming language and all you need to do
// is pass it data
name = 'Jeremiah Jackson'
console.log(name)

// User defined functions: these are custom instructions that are
//written by engineers

// how do we write function - function syntax
// declare function
function exampleFunction(){
    alert("you are now connected to the JS file.");
    console.log('step 1.')
    console.log('step 2.')
    console.log('step 3.')
}
 
// call function
//exampleFunction()

let accountBalance = 100

function depositMoney(x){
    console.log('money has been added successfully')
    console.log(accountBalance + x)
}