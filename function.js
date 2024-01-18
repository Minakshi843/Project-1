console.log("hello!");

//function definition 
// function functionName()
// {
//     //do something
// }

//function call
// functionName();

// function myFunction(msg, n)//parameter
// {
//     console.log("welcome to my code base");
//     console.log("we are learning js :)" , msg,n);
// }
//  myFunction(" by minakshi ", 20);//argument


// let y=9;               // global variables
// function sum(x)
// {
//  s= x+y;               //local variable
//  return s;
 
// }
// let val = sum(89);
// console.log(val);

//arrow functions
// const functionName= (par1, par2) =>
// {
//     //task
// }

// const arrsum =(a,b) => {
//     console.log(a+b);

// };

// const arrowsum=( p1,p2)=>
// {  s=p1*p2;
//     return s;
// }
// let val = arrowsum(8,6);
// console.log(val);

// function countVowels(str)
// {  let count = 0;

//     for(const char of str)
//     {
//     if(char==="a" || char ==="e" || char ==="i" || char==="o" || char ==="u")
//         {
//             count++;

//         }  

//     }
//     console.log(count);
// }


// const countVow =(str)=>
// {
//     let count = 0;

//     for(const char of str)
//     {
//     if(char==="a" || char ==="e" || char ==="i" || char==="o" || char ==="u")
//         {
//             count++;

//         }  

//     }
//     console.log(count);
// }

//forEach loop in array 
//Array.forEach(callBackFunction)
// function can be passed in javascript as a parameter

let arr=["pune", "mumbai","delhi","gurgao"];
arr.forEach((val,ind)=>
{
    console.log(val.toUpperCase(),ind);
});

