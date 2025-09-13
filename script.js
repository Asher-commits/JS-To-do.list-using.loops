const tasks = []; // Array to store tasks

while (true){
    const task = prompt("Enter a task (or type 'exit' to quit):"); // Prompt user for a task

    // Check if the user wants to exit
    if (task.toLowerCase() === 'exit'){
        break;
    }
// Add the task to the array
    tasks.push(task);

}
// Display all tasks using a for loop
console.log("Your tasks:");
for (let i = 0; i < tasks.length; i++){
    console.log(tasks[i]);

}

