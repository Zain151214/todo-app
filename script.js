let btn = document.getElementById("btn");

let p = document.getElementById("todo-lists");

btn.addEventListener('click', function(){
    // creating new list 
    let p = document.createElement("p");

    if(input.value === ""){
        alert("Please Enter Task");
    }else{
        p.innerHTML = input.value;
        document.getElementById("todo-lists").appendChild(p);    
    }

    // adding class(css)
    p.classList.add("mystyle");

    // setting input field to empty string
    input.value = '';   

    // Code for Deleting a Task...    
    let done = document.createElement('button');

    done.innerHTML = "Done";

    done.classList.add("del_style");

    p.appendChild(done);

    // done button functionality
    done.addEventListener("click", function(){
        p.style.display = "none";
    })
    
})

// Code for Enter button functionality
input.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        document.getElementById("btn").click();
    }
})
