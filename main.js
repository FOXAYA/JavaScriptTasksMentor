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

// document.addEventListener("DOMContentLoaded", () => {
//     let container =  document.querySelector('.container');
//     container.style.cssText =`
//                display: flex;
//                 flex-direction: column;
//                 gap: 10px;
//                 padding: 20px;
//     ` 
//     // Number of rows and cards per row
//     let rowsNum = 4;
//     let cardsNum = 5;

//     // Function to create a card
//     function createCard() {
//         let card = document.createElement('div');
   
//             card.style.cssText = `
//                 width:400px ;
//                 height: 300px;
//                 border: 3px solid brown; 
//                 `;

//                 let img = document.createElement("img");
//                 img.setAttribute("src" , "/images/three.jpg");
            
//                 img.style.cssText = `
//                     width: 300px;
//                     `
//                 //paragraph set, and style
//                 let p = document.createElement("p");
//                 p.textContent = "we Have Four Cards In Stock.";
            
//                 p.style.cssText = `
//                     font-family: Verdana, Geneva, Tahoma, sans-serif;
//                     font-size: 18px;
//                     color: rgb(8, 5, 1);
//                     text-transform: capitalize;
//                 `
//                 let h1 = document.createElement("h1");  
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
//         let row = document.createElement('div');

//         for (let i = 1; i <= cardsNum; i++) {
//             let card = createCard(`Card ${rowNum}-${i}`);
//             row.appendChild(card);
//         }
//             row.style.cssText =`
//             display: flex;
//             gap: 10px;
//                         `
//         return row;
//     }

//     // Create rows and append them to the container
//     for (let i = 1; i <= rowsNum; i++) {
//         let row = createRow(i);
//         container.appendChild(row);
//     }
// });


// Task Five>>>>>>>>>>>>>>>>>>>>>>>>>>>>> //
/*
let body_btn = document.getElementById("body_btn");
let text_btn = document.getElementById("text_btn");

//Function Of Random colors
let getRandomColor = () => {
    let randomNum = () => Math.floor(Math.random() * 255);
    return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
};
//Function To Change Text color;

let counter = 0;
let changeTextColor = () => {
    let text = document.querySelector("p");
    let randomColor = getRandomColor();

    if (counter <= 5){
      text.style.color = randomColor;
      counter++;
    }
    else{
        text.style.color = "black";

      }
};
//Function To Change body color;

let changeBodyColor = () => {
    document.body.style.backgroundColor = getRandomColor();
};
//Add event Listene To btns
text_btn.addEventListener("click", changeTextColor);
body_btn.addEventListener("click", changeBodyColor);
*/


// Task six>>>>>>>>>>>>>>>>>>>>>>>>>>>>> //

/*
let videoSource = [
    "/images/VID-20240721-WA0023 (1).mp4",
    "/images/VID-20240722-WA0052.mp4"
  ];

  document.addEventListener("DOMContentLoaded", function(){
     let video =  document.getElementById("videoPlayer");
     let randomVideo = Math.floor(Math.random() * videoSource.length);
     video.src = videoSource[randomVideo];
     video.play();
  });
  */


  // Task seven>>>>>>>>>>>>>>>>>>>>>>>>>>>> //
// let closeNav = document.querySelector(".close-btn");
// let sideNav = document.querySelector(".sid-nav");
// let openNav = document.querySelector(".open-nav");



// openNav.addEventListener("click",() => {
//     sideNav.style.width = "250px";

// });
// closeNav.addEventListener("click",() => {
//     sideNav.style.width = "0px";
// });


  // Task eight>>>>>>>>>>>>>>>>>>>>>>>>>>>> //
/*
  (function() {
    var dragged, listener;

    dragged = null;

    listener = document.addEventListener;

    listener("dragstart", (event) => {
      return dragged = event.target;
    });

  

    listener("dragover", function(event) {
      return event.preventDefault();
    });

    listener("drop", (event) => {
      event.preventDefault();
      if (event.target.className === "drop-zone") {
        dragged.parentNode.removeChild(dragged);
        return event.target.appendChild(dragged);
      }
    });

  }).call(this);*/

  
    // Task nine>>>>>>>>>>>>>>>>>>>>>>>>>>>> //
let container = document.querySelector(".container");
let form = document.querySelector("form");




form.addEventListener('submit', function(event){
    event.preventDefault();

    //Handle Form submition
    let card_container = document.querySelector(".card_container");
    let product_name = document.getElementById('product_name').value;
    let product_desc = document.getElementById('description').value;
    let product_img = document.getElementById('url').value;
    let product_price = document.getElementById('price').value;
    let product_discount = document.getElementById('discount').value;
  

    //creat card elements
    let card =  document.createElement("div");
    card.className = 'card';

    let card_img = document.createElement('img');
    card_img.className = 'img';
    card_img.src = product_img;
    card_img.alt = product_name;

    let card_title = document.createElement('h1');
    card_title.textContent =  product_name;


    let card_desc = document.createElement('p');
    card_desc.textContent =  product_desc;

    
    let card_price= document.createElement('p');
    card_price.textContent =  `$${parseFloat(product_price).toFixed(2)}`;


    let card_discount= document.createElement('p');
    card_discount.textContent =  `$${parseFloat(product_discount).toFixed(2)}`;

    let edit_btn = document.createElement("button");
    edit_btn.className = "btn";
     edit_btn.textContent = 'Edit';

    let delete_btn = document.createElement("button");
    delete_btn.textContent = 'Delete';
    delete_btn.className = "btn";



       // Append elements to card
   
    card_container.appendChild(card);
  
       card.appendChild(card_img);
       card.appendChild(card_title);
       card.appendChild(card_desc);
       card.appendChild(card_price);
       card.appendChild(card_discount);
       card.appendChild(edit_btn);
       card.appendChild(delete_btn);
});

delete_btn.addEventListener("Click",() => {
  card_container.removeChild();
});
