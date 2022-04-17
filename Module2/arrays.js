// empty array

let arr = [];
console.log(arr);

// array with element

let elemArr = [1,2,3,4, "Im a String", true, 4.55];
console.log(elemArr);

// accesing particular elem

console.log("Elemnt at 4th index is: "+ elemArr[4])
console.log("Elemnt at 0th index is: "+ elemArr[0])

//changing elem

elemArr[3] = "nothing";
console.log(elemArr);

console.log("####################################################################")

//Ararys Methods
//1.Push ----> add element at end
console.log("Array before push: " , elemArr);
elemArr.push("new item");
console.log("After push: " , elemArr ,"\n");

//2.Pop ----> remove elemnt from end
console.log("Array before pop: " , elemArr);
elemArr.pop();
console.log("After pop: " , elemArr, "\n");

//3. shift ---> remove element from start
console.log("Array before shift: " , elemArr);
elemArr.shift();
console.log("Array before shift: " , elemArr, "\n");

//4. unshift ---> add element at start

console.log("Array before unshift: " , elemArr);
elemArr.unshift("newly added");
console.log("Array before unshift: " , elemArr, "\n");

//length
let len = elemArr.length;
console.log(len);