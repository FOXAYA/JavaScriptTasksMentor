// Task One>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> //

/*const text  = "This Is My First Task";
const i = 0;
const output = document.querySelector("h1");

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

// const btn_one = document.getElementById("btn-one") ;
// const btn_two =  document.getElementById("btn-two");
// const btn_three = document.getElementById("btn-three") ;
// const text = document.querySelector("h1") ;
// const back_ground = document.querySelector(".bg"); 
// // const container = document.querySelector(".container")


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

// const list = document.querySelectorAll("ul li");
// const exp = document.querySelector(".experiment");

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
//         const backgroundImage = e.currentTarget.dataset.back;
//         window.localStorage.setItem("backgroundImage", backgroundImage);

//         // Change the background image of the experiment div
//         exp.style.backgroundSize = "cover";

//         exp.style.backgroundImage = `url(${backgroundImage})`;
 
//     });
// });



// Task FOUR>>>>>>>>>>>>>>>>>>>>>>>>>>>>> //

// document.addEventListener("DOMContentLoaded", () => {
//     const container =  document.querySelector('.container');
//     container.style.cssText =`
//                display: flex;
//                 flex-direction: column;
//                 gap: 10px;
//                 padding: 20px;
//     ` 
//     // Number of rows and cards per row
//     const rowsNum = 4;
//     const cardsNum = 5;

//     // Function to create a card
//     function createCard() {
//         const card = document.createElement('div');
   
//             card.style.cssText = `
//                 width:400px ;
//                 height: 300px;
//                 border: 3px solid brown; 
//                 `;

//                 const img = document.createElement("img");
//                 img.setAttribute("src" , "/images/three.jpg");
            
//                 img.style.cssText = `
//                     width: 300px;
//                     `
//                 //paragraph set, and style
//                 const p = document.createElement("p");
//                 p.textContent = "we Have Four Cards In Stock.";
            
//                 p.style.cssText = `
//                     font-family: Verdana, Geneva, Tahoma, sans-serif;
//                     font-size: 18px;
//                     color: rgb(8, 5, 1);
//                     text-transform: capitalize;
//                 `
//                 const h1 = document.createElement("h1");  
//                 h1.textContent = "Fox Cards"
                
//                 h1.style.cssText = `
//                     font-family: Verdana, Geneva, Tahoma, sans-serif;
//                     font-size: 18px;
//                     color: orange;
//                     font-weight: 700;
//                     text-transform: uppercase;
//                 `
            
//                  card.append(img,h1 ,p);
//                   return card;
//     }
  
//     //Creat Rows
//     function createRow(rowNum) {
//         const row = document.createElement('div');

//         for (const i = 1; i <= cardsNum; i++) {
//             const card = createCard(`Card ${rowNum}-${i}`);
//             row.appendChild(card);
//         }
//             row.style.cssText =`
//             display: flex;
//             gap: 10px;
//                         `
//         return row;
//     }

//     // Create rows and append them to the container
//     for (const i = 1; i <= rowsNum; i++) {
//         const row = createRow(i);
//         container.appendChild(row);
//     }
// });


// Task Five>>>>>>>>>>>>>>>>>>>>>>>>>>>>> //

const body_btn = document.getElementById("body_btn");
const text_btn = document.getElementById("text_btn");

//Function Of Random colors
const getRandomColor = () => {
    const randomNum = () => Math.floor(Math.random() * 255);
    return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
};
//Function To Change Text color;

let counter = 0;
const changeTextColor = () => {
    const text = document.querySelector("p");
    const randomColor = getRandomColor();

    if (counter <= 5){
      text.style.color = randomColor;
      counter++;
    }
    else{
        text.style.color = "black";

      }
};
//Function To Change body color;

const changeBodyColor = () => {
    document.body.style.backgroundColor = getRandomColor();
};
//Add event Listene To btns
text_btn.addEventListener("click", changeTextColor);
body_btn.addEventListener("click", changeBodyColor);
