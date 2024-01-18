console.log("hello this is my js line for you");
console.log(" is this your first code");
age =24;
fullname="miankshi burman";
price=28.69;

age=54;
console.log(fullname);

x=null;
console.log(x);         // for printing 
 y = undefined;
 console.log(y);
 isFollow=false;
 isnotFollow=true;
 myName=2667;
 console.log(myName,isFollow);




 // variables : 3 types - let , var , const;

 let name="minakshi";   // let for declaration of variable , block scope variable , 
                       //updatable but not re declable , let can be not initialize after declartion
 name = "sakshi";
 console.log(name);
 var age = 78;
 console.log(age);
 var age = 90;          // re declartion 
 console.log(age);      // re declarion for variable , global scope // 

 const PI =  3.14 ;                      // not re declable nd updatable   
//  console.log(PI);                        // const must be initialize


 //Primitive datatype : 7 type  - Number , Boolean , undefined , Bigint , symbol,  Null
 //non-primitive datatype : 9 type - Objects(Array, Functions)


 const student=
 {
    fullname :"mahi",
    cgpa : 8.52,                       //Object
    age : 20,
    isTrue : true,

 }   ;
console.log(student["age"]); ///accessing through key : value  
console.log(student.fullname);


// we can change the vale like this
student.age=student.age+1;
console.log(student.age);
student["fullname"]="mahima";
console.log(student.fullname);