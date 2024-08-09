let text  = "This Is My First Task";
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
typingWriter();

