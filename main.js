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

// let btn_one = document.getElementById("btn-one") ;
// let btn_two =  document.getElementById("btn-two");
// let btn_three = document.getElementById("btn-three") ;
// let text = document.querySelector("h1") ;
// let back_ground = document.querySelector(".bg"); 
// // let container = document.querySelector(".container")


// btn_one.addEventListener('click', () => {
//     text.before(back_ground);
// });


// btn_three.addEventListener('click', () => {
//    text.after(back_ground);
// });


// btn_two.addEventListener('click', () => {
//        back_ground.append(text);
// });



// Task Three>>>>>>>>>>>>>>>>>>>>>>>>>>>>> //

// let list = document.querySelectorAll("ul li");
// let exp = document.querySelector(".experiment");

// // Check if backgroundImage is set in localStorage
// if (window.localStorage.getItem("backgroundImage")) {
//     // Set the background image of the experiment div
//     exp.style.backgroundImage = `url(${window.localStorage.getItem("backgroundImage")})`;

//     // Remove the active class from all list items
//     list.forEach((li) => {
//         li.classList.remove("active");
//     });

//     // Add the active class to the list item with the current background image
//     list.forEach((li) => {
//         if (li.dataset.back === window.localStorage.getItem("backgroundImage")) {
//             li.classList.add("active");
//         }
//     });
// }

// // Add click event listener to each list item
// list.forEach((li) => {
//     li.addEventListener("click", (e) => {
//         // Remove the active class from all list items
//         list.forEach((li) => {
//             li.classList.remove("active");
//         });

//         // Add the active class to the clicked list item
//         e.currentTarget.classList.add("active");

//         // Get the background image URL and set it in localStorage
//         let backgroundImage = e.currentTarget.dataset.back;
//         window.localStorage.setItem("backgroundImage", backgroundImage);

//         // Change the background image of the experiment div
//         exp.style.backgroundSize = "cover";

//         exp.style.backgroundImage = `url(${backgroundImage})`;
 
//     });
// });



// Task FOUR>>>>>>>>>>>>>>>>>>>>>>>>>>>>> //

document.addEventListener("DOMContentLoaded", () => {
    const container =  document.querySelector('.container');
    container.style.cssText =`
               display: flex;
                flex-direction: column;
                gap: 10px;
                padding: 20px;
    ` 
    // Number of rows and cards per row
    const rowsNum = 4;
    const cardsNum = 5;

    // Function to create a card
    function createCard() {
        const card = document.createElement('div');
   
            card.style.cssText = `
                width:400px ;
                height: 300px;
                border: 3px solid brown; 
                `;

                let img = document.createElement("img");
                img.setAttribute("src" , "/images/three.jpg");
            
                img.style.cssText = `
                    width: 300px;
                    `
                //paragraph set, and style
                let p = document.createElement("p");
                p.textContent = "we Have Four Cards In Stock.";
            
                p.style.cssText = `
                    font-family: Verdana, Geneva, Tahoma, sans-serif;
                    font-size: 18px;
                    color: rgb(8, 5, 1);
                    text-transform: capitalize;
                `
                let h1 = document.createElement("h1");  
                h1.textContent = "Fox Cards"
                
                h1.style.cssText = `
                    font-family: Verdana, Geneva, Tahoma, sans-serif;
                    font-size: 18px;
                    color: orange;
                    font-weight: 700;
                    text-transform: uppercase;
                `
            
                 card.append(img,h1 ,p);
                  return card;
    }
  
    //Creat Rows
    function createRow(rowNum) {
        const row = document.createElement('div');

        for (let i = 1; i <= cardsNum; i++) {
            const card = createCard(`Card ${rowNum}-${i}`);
            row.appendChild(card);
        }
            row.style.cssText =`
            display: flex;
            gap: 10px;
                        `
        return row;
    }

    // Create rows and append them to the container
    for (let i = 1; i <= rowsNum; i++) {
        const row = createRow(i);
        container.appendChild(row);
    }
});



