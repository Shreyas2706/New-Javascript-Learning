//console.log("shreyas singh") ;
//console.log("I love Javascript") ;

/*FullName = "Tony stark" ;
price = "99" ;
x = null ;
IsFollow = false ;
console.table([price,FullName,x,IsFollow])*/
/*{
    let a = 24 ;
    console.log(a) ;
} 
{
    let a = 32 ;
    console.log(a);

}
price = 123 ;
console.log(typeof price)*/

/*const student = {
    fullName : "SHREYAS SINGH" ,
    age : 44 ,
    cgpa : 8.4 ,
    isPass : true ,
} ;
student ["fullName"] = "Rahul Sharma"
console.log(student["fullName"]) */

/*const product = {
 tittle : "Ball Pen" ,
 rating : 4 ,
 offer : 5 ,
 price : 270 ,
} ;

console.log(product) ; */

/*const profile = {
    posts : 195 ,
    isFollow : true ,
    followers : 4 ,
    fUllName : "Shradha Khapra" ,
    ocuupation : "Entrepreneur" ,
    about : "Apna college" ,

} ;
     console.log (profile) ;
     console.log(profile.posts) ;
     console.log(typeof profile.posts) */

    // /* let a = 24 ;
    //  let b = 23 ;
    // console.log("a= ", a ,"&" ,"b = " , b )
    //  console.log("a+b= ",a+b) ;
    //  console.log("a-b = ",a-b) ;
    //  console.log("a*b= ",a*b) ;
    //  console.log("a/b = " , a/b ) ;
    //  console.log("a%b = " , a%b) ;
    //  console.log("a**b = " , a**b) ; */

     // unnary operater 

// let a = 24 ;
//      let b = 23 ;
// console.log("a= ", a ,"&" ,"b = " , b ) ;
 
//  console.log("a = " ,++a) ;    // 25
//  console.log("a = " , a++) ; 

// assingmnet operator 

// let c = 2 ;
// // c+= 2 ; // 4 
// // c-= 4 ; // -2
// // c*= 4 ; // 8 
// // c/=2 ; // 1 
// //  c**=4 ; // 16 

// console.log(c);

/////// comparison operator //////

// let a = 5 ; // number
// let b = "5"; // string

// console.log("a!==b" , a!==b) ; // false 

// Logical operator 

// let a = 6 ;
// let b = 5 ;

// let cond1 = a>b ;
// let cond2 = a==6 ;
 
// let cond1 = a==b ;
// let cond2 = a>b ; 
 
// console.log("cond1 || cond2 = ", cond1 || cond2) ;

/// Conditional Statement  !!!!! ....

// let age = 12 ;

// if (age>18) {
//     console.log("Adult")
// } else {
//     console.log("Not Adult")
// }
 
// let mode = "dark" ;
// let color ;

// if(mode === "dark") {
// color = "black ";
// }
// if (mode === "Light") {
//     color = "Light"
// }

// console.log(color)

// let num = 12 ;
// if (num%2 == 0) {
//     console.log("Even") ;
// }
// else {
//     console.log("Odd") ;
// }

// Ternary operator 

// let age = 25 ;
// let result = age >= 18 ? "Adult" : "not Adult" ;

// console.log(result) ; 

///// Take Input //////
//alert("hello")
let name = prompt("Enter a Numner to check weather it is a multiple of 5 or not") ; 
if (name%5 == 0 ) {
    console.log(name,"Is a Multiple of Five")
} else {
    console.log(name ,"Not a Multiple of Five")
}