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
    
        container.appendChild(back_ground);
});









