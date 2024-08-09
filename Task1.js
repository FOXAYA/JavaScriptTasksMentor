
//creat text, specify speed, catch my div

let my_txt =  "This Is My First Task";
let speed =  100;
let output_txt = document.querySelector(".txt_typing")//or document.getElementsByClassName

//function to add text to html page check if txt is < length of my text
function typing(){
    let i  = 0;
    if (i < my_txt.length)
    {
        output_txt.innerHTML = "my_txt";
    }
}


