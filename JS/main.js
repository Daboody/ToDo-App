let taskTitleInput = document.querySelector(".first-row :nth-child(1)");
let taskDescritionInput = document.querySelector(".first-row :nth-child(2)");
let priorityInput = document.querySelector(".second-row :nth-child(1)");
let taskTimeInput = document.querySelector("[type = datetime-local]");
let addTask = document.querySelector(".third-row :nth-child(1)");
let clearFields = document.querySelector(".third-row :nth-child(2)");
let appContainer = document.querySelector(".container");
let tasksCounter = document.querySelector(".counter");

clearFields.addEventListener("click",function(){
    taskTitleInput.value = "";
    taskDescritionInput.value = "";
    taskTimeInput.value = "";
    priorityInput.value = priorityInput.children[0].value;
});

addTask.addEventListener("click",function(){
    if(taskTitleInput.value !== "" && taskDescritionInput.value !== "" && priorityInput.value !== priorityInput.children[0].value && taskTimeInput.value !== ""){
        
        // Counter
        for ( let i =0; i< appContainer.childElementCount; i++){
            tasksCounter.innerHTML = `Total Tasks: ${i+1}`;
        };

        // Task Element Wrapper
        let newTask = document.createElement("div");
        newTask.className = "new-task";

        // Task Description Element
        let taskDetails = document.createElement("div");
        taskDetails.className = "task-details";

        let taskTitle = document.createElement("h3");
        taskTitle.className = "task-title";
        taskTitle.innerHTML = taskTitleInput.value;

        // Task Date Element
        let taskDate = document.createElement("span");
        taskDate.className = "task-description";
        taskDate.innerHTML = taskTimeInput.value.slice(0,10);

        // Task Time Element
        let taskTime = document.createElement("span");
        taskTime.className = "task-description";
        taskTime.innerHTML = taskTimeInput.value.slice(11,);
        
        // Task Priority Element
        let taskPriority = document.createElement("span");
        taskPriority.className = "task-description";
        taskPriority.innerHTML = `${priorityInput.value} Priority`

        // Task Description Element
        let taskDescription = document.createElement("span");
        taskDescription.className = "task-description";
        taskDescription.innerHTML = taskDescritionInput.value;


        // Task Options Elements
        let deleteTask = document.createElement("i");
        deleteTask.className = "fa-solid fa-xmark";

        let complateTask = document.createElement("input");
        complateTask.setAttribute("type","checkbox");

        let minimizeTask = document.createElement("i");
        minimizeTask.className = "fa-solid fa-window-minimize";
        
        // Append Task Details
        newTask.appendChild(taskTitle);
        newTask.appendChild(taskDetails);

        taskDetails.appendChild(taskDate);
        taskDetails.appendChild(taskTime);
        taskDetails.appendChild(taskPriority);
        taskDetails.appendChild(taskDescription);

        newTask.appendChild(deleteTask);
        newTask.appendChild(complateTask);
        newTask.appendChild(minimizeTask);

        // Append Tasks
        appContainer.appendChild(newTask);

        // Remove Task From List
        deleteTask.addEventListener("click",function(){
            this.parentElement.remove();

            // Counter
        for ( let i =0; i< appContainer.childElementCount; i++){
            tasksCounter.innerHTML = `Total Tasks: ${i}`;
        };
        });

        // Minimize Task Size
        minimizeTask.addEventListener("click",function(){
            newTask.classList.toggle("hide-item");
            if(newTask.classList.contains("hide-item") == true){
                taskDescription.style = "visibility: hidden; ";
                complateTask.style = "visibility: hidden;";
                newTask.style = "height: 55px; transition: .2s;";
            } else {
                taskDescription.style = "visibility: unset; transition: .10s";
                complateTask.style = "visibility: unset; transition: .10s";
                newTask.style = "height: 150px; transition:.2s;"
            };
        });

        
        // When task is Complete
        complateTask.addEventListener("click",function(){
            newTask.classList.toggle("task-done");
            if(newTask.classList.contains("task-done") === true){
                // Add taskComplete Icon
               let complateIcon = document.createElement("i");
               complateIcon.className = "fa-solid fa-circle-check" ;
               complateIcon.style.cssText = "font-size: 25px; color:rgb(132, 132, 130); position: absolute; top: 10px; left: 100px;";
               taskDetails.appendChild(complateIcon);
               } else if (newTask.classList.contains("task-done") === false){
                // Remove taskComplete Icon
                taskDetails.children[4].remove();
               }
        });
    

    };
    taskTitleInput.value = "";
    taskDescritionInput.value = "";
    taskTimeInput.value = "";
    priorityInput.value = priorityInput.children[0].value;
});