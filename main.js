// Task One>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> //

/*let text  = "This Is My First Task";
let i = 0;
let output = document.querySelector("h1");

function typingWriter(){
    output.textContent += text.charAt(i);
    i++;


    if (i === text.length+1)
    {
        i = 0;
        output.textContent = " ";

    }
    setTimeout(typingWriter, 200);
}
typingWriter();*/


// Task Two>>>>>>>>>>>>>>>>>>>>>>>>>>>>> //
/*
let btn_one = document.getElementById("btn-one") ;
let btn_two =  document.getElementById("btn-two");
let btn_three = document.getElementById("btn-three") ;
let text = document.querySelector("h1") ;
let back_ground = document.querySelector(".bg"); 
let container = document.querySelector(".container")


btn_one.addEventListener('click', () => {
    container.insertBefore(back_ground, text);
});


btn_three.addEventListener('click', () => {
    container.insertBefore(back_ground, text.nextSibling);
});


btn_two.addEventListener('click', () => {
    if (back_ground.parentNode === container) {
        container.appendChild(back_ground);
    }
    else{
        container.insertBefore(back_ground, text.nextSibling);
    }
});
*/


// Task Three>>>>>>>>>>>>>>>>>>>>>>>>>>>>> //

let list = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

// Check if backgroundImage is set in localStorage
if (window.localStorage.getItem("backgroundImage")) {
    // Set the background image of the experiment div
    exp.style.backgroundImage = `url(${window.localStorage.getItem("backgroundImage")})`;

    // Remove the active class from all list items
    list.forEach((li) => {
        li.classList.remove("active");
    });

    // Add the active class to the list item with the current background image
    list.forEach((li) => {
        if (li.dataset.back === window.localStorage.getItem("backgroundImage")) {
            li.classList.add("active");
        }
    });
}

// Add click event listener to each list item
list.forEach((li) => {
    li.addEventListener("click", (e) => {
        // Remove the active class from all list items
        list.forEach((li) => {
            li.classList.remove("active");
        });

        // Add the active class to the clicked list item
        e.currentTarget.classList.add("active");

        // Get the background image URL and set it in localStorage
        let backgroundImage = e.currentTarget.dataset.back;
        window.localStorage.setItem("backgroundImage", backgroundImage);

        // Change the background image of the experiment div
        exp.style.backgroundSize = "cover";

        exp.style.backgroundImage = `url(${backgroundImage})`;
 
    });
});



