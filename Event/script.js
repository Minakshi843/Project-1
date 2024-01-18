// event handling in js
// node.event=()==>
// {
//     handle here
// }

// 1st approact of event handling 
// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () =>
// {
//   console.log("btn1 was clicked");
//   let a = 25;
//   a++;
//   console.log(a); // 26 
// };


// //2nd approach of event handling 
// let btn1= document.querySelector('#btn1');

// btn1.onclick=(evt) =>
// {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// }


// //1st approach for div event 
// let div = document.querySelector("div");
// div.onmouseover = () =>
// {
//     console.log("you are inside div ");
// };
 

// //end approach for div event handling
// let div = document.querySelector("div");
// div.onmouseover = (evt) =>
// {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY); // position

// }


// add event lister 

// let  btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click",(evt)=>
// {
//     console.log("button1 was clicked");
//     console.log(evt);
//     console.log(evt.type);
// });

// btn1.addEventListener("click",()=>
// {
//     console.log("button1 was clicked- handler2 ");
// });

// let div =document.querySelector("div");



//remove event listner 

let  btn1 = document.querySelector("#btn1");

btn1.addEventListener("click",()=>
{
    console.log("button1 was clicked-handler 1");
});

btn1.addEventListener("click",()=>
{
    console.log("button1 was clicked-handler 2");
});

btn1.addEventListener("click",()=>
{
    console.log("button1 was clicked-handler 3");
});

// this is saved in a variable beacuse when we create a function
// so it save in a different memory and when me call it at remove event, callback 
// so it not able to track the function so that it it used like this to remove 

const handler4 =() =>
{
    console.log("button1 was clicked-handler 4");

}
// btn1.addEventListener("click",()=>
// {
//     console.log("button1 was clicked-handler 4");
// });

btn1.addEventListener("click",()=>
{
    console.log("button1 was clicked- handler5");
});

btn1.removeEventListener("click",handler4)

