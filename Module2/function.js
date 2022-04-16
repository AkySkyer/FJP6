//function in js w/o parameter and w/o return type
function sayHello(){
    console.log('Hello from function');
}

sayHello();

//function in js with parameter

function sum(num1, num2){
    let add = num1 + num2;
    console.log("Addition of given numbers: " + add);
}

sum(2,98);

//function with return type

 function multiply(num1, num2){
     return num1*num2;
 }
  let ans = multiply(3,5);
  console.log(ans);

  function substract(num1,num2){
      return num1-num2;
  }

  let sub = substract(100,55);
  console.log(sub);

  //is prime practice 

  let num =23;
  let isPrime = true;
  for(let i=2; i*i >=num; i++){
      if(num%i == 0){
          isPrime = false;
      }
  }
  if(isPrime == true){
      console.log("Prime");
  }else{
      console.log("Not Prime");
  }

  // in JS u can store fn in a variable--------------------->>>>>>>>>>>>>>>>>>> I M P ---------------------------------->>>>>>>>>>>
  // functions are First class citizen
  let fn = function substracta(num1,num2){
      return num1-num2;
  }

  console.log(fn(65,32));

let div = function division(num1,num2){
    return num1/num2;
}
console.log(div(190,8));

//IIFE --> Immediately Invoked Function Expression-------------->>>>>>>>>>>>>>> V V V - I M P ---------------------------------->>>>>>>>>>>

(function(){
    console.log("Hello From IIFE");
})();

(function(num1,num2){
    console.log(num1/num2);
})(10,5);
