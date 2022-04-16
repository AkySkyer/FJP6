// this is for printing
console.log("Swagat nhi karoge hamara");

//variables in javaScript

let num = 10; //number
console.log(num);

let char = 'a';
console.log(char);

let Str = "I'm a Pepcoder";
console.log(Str);

let bool = true;
console.log(bool);

for(let i=1; i<=5; i++){
    console.log(i);
}

let count = 5;
while(count>0){
    console.log(count);
    count--;
}

// is prime
let n = 17;
let isPrime = true;

for(let i=2; i*i<=n; i++){
    if(n%i == 0){
        isPrime = false;
    }
}
if(isPrime == true){
    console.log("Number is Prime");
}
else{
    console.log("Number is not Prime")
}




