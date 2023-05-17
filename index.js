function myEach(collection, callback) {
//let newCollection = Object.assign(collection)
let newArray = Object.values(collection)
// if (Array.isArray(collection) ? console.log(collection) : Object.entries(collection))

for (let i = 0; i < newArray.length; i++){
        callback(newArray[i])
}
return collection;

}

function myMap(collection, callback) {
    let newArray = Object.values(collection);
    let arr = [];
for (let element = 0; element < newArray.length; element++){
    //console.log(newArray[element])
    arr.push(callback(newArray[element]))
}
return arr
}

function myReduce(collection, callback, acc) {
    let newArray = Object.values(collection)
    let accumulator = acc;
    for (let i = 0; i < newArray.length; i++) {
        if (accumulator === undefined) {
            accumulator = newArray[i];
        } else {
            accumulator = callback(accumulator, newArray[i], i, newArray);
        }
    } return accumulator
}

function myFind(collection, predicate) {
let newArray = Object.values(collection);
    for (let i = 0; i < newArray.length; i++) {
        if(predicate(newArray[i]) === true) {
            return newArray[i]
        }
    }
}

function myFilter(collection, predicate) {
let newArray = Object.values(collection); 
let arr = [];

for (let i = 0; i < newArray.length; i++) {
    if(predicate(newArray[i]) === true) {
        arr.push(newArray[i])
    }
}
return arr

}

function mySize(collection) {
let newArray = Object.values(collection);
return newArray.length;
}

function myFirst(array, n) {
    let arr = []
     if(n===undefined){
            return array[0]
        } else {
           // return (array[n])
           for (let j = 0; j < n; j++) {
                arr.push(array[j])
           }
           return arr
        }
}

function myLast(array, n) {
let arr = [];
 if (n === undefined) {
    return array[array.length-1];
 } else {
    for (let i = array.length-1; i < array.length; i--) {
        arr.push(array[i])
    }
    return arr
 }

}
