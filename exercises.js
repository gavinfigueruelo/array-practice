// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------

function repeat(str, i) {
  str = `${str}, `;
return str.repeat(i);
};
console.log(repeat('sunshine', 3));




// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------

const a = [1,2,3,4]
let b = reverseArr(a);
function reverseArray(arr) {
  let newarr = new Array;
  let newarr = [];
  for (var i = 0; i < arr.length; i++) {
    newarr.push(arr[i]);
    newarr.unshift(arr[i]);
  }
  return newarr
  return newarr;
};

console.log(b);
console.log(reverseArray(a));


// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------

let array = [1, false, 7, null, 0]
let array = [1, false, 7, null, 0, NaN, 9]
function noFalsy(arr) {
  return arr.filter(Boolean);
}
console.log(noFalsy(array));


// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------

const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]]
function objArray(arr) {
  const myObj = {};
  for (var i = 0; i < arr.length; i++) {
    // ['name', 'Charlie']
    const key = arr[i][0];//hey everytime you loop grab the index 0 in the array and set it to key;
    const value = arr[i][1];
    //add the key to the object then set the value to the key
    myObj[key] = value;
  }
  return myObj;
}
objArray(myArray);


// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------

let array1 = [1,2,3,4,5,4,3]
function removeDup(arr) {
  noDupArr = []
  for (var i = 0; i < arr.length; i++) {
    if(noDupArr.indexOf(arr[i]) === -1){ //if it returns -1 which means it did not find it then push the number thru
      noDupArr.push(arr[i]);
    }
  }
  return noDupArr;
};
removeDup(array1);

// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------

function arrMatch(a, b) {
  if (JSON.stringify(a) === JSON.stringify(b))
  { return true;
  } else {
    return false;
  }
};
arrMatch([1,2, 'c',5], [1,2,3,4]);


// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------










// -----------------------------------------------
