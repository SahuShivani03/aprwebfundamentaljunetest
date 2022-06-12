alert('hello')

// Question1. Write a function to check if geekster exists in your array var list = ['geek', 'geekster', 'geeky'];
//If it exists  add some code to find the index of geekster and remove that item.

var list = ['geek','geekster', 'geeky'];
for(let i=0;i<list.length;i++){
    if(list[i]=='geekster')
    {
     
        for( let p=i;p<list.length-1;p++){
            list[p]=list[p+1];
        }
    }
}
list.pop();
console.log(list);

// Question2. In how many ways can we loop in an array describe each with an example ?
// methodes for looping an array
// 1. for loop simple method : in this methode we give a for loop from index value 0 to index value 1 less than length of an Array

let array = [1,2,3,4,5,6];
for(let i=0;i<array.length;i++){
    console.log('method1',array[i]);
}
console.log('**********');

// 2. for loop of methode 

for(let elements of array){
    console.log('method2',elements);
}
console.log('**********');

// 3.While loops: 

let index=0;
while(index<array.length){
    console.log('method3',array[index]);
    index++;
}
console.log('**********');


//  Question3. What is the length of these arraysA. var arr1 = [,,,]; B. var arr2 = new Array(3)C.
// var arr3 = [1,2,3,4,5]D. var array = [ [1,2,3], [4,5,6]  ];E. var array[0].length = [ [1,2,3], [4,5,6]  ];
//a

var arr1 = [,,,];
var arr2 = new Array(3)
var arr3 = [1,2,3,4,5]
var arr4 = [ [1,2,3], [4,5,6]  ]
// var arr[0].length = [ [1,2,3], [4,5,6]  ]
// guesses= arr1=4; arr2=3; arr3=5; arr4=2; last option in my opinion is with some incorrect syntax.
// checking 
console.log(arr1.length,arr2.length,arr3.length,arr4.length);

// all the guesses were true exept arr1 its length is 3 


//  Question4. Find the index position of b in this array var arr= ['a','b','c','d'];

var arr= ['a','b','c','d']; 
for(let i=0;i<arr.length;i++){
    if(arr[i]=='b'){
        console.log('index of b is ',i);
    }
}



//  Question5. What will be returned if you look for the index of something that does not exist?


let exampleArray = [1,'apple',true,3,5]
    
console.log(exampleArray.indexOf("mango"));
// -1    =>    does not exist
//  Question6. Find the nth largest element in a sorted array

let array3 = [10, 60, 30, 40, 50, 70];

// sort the array

let sortedArray = array3.sort();

// find the largest in sortedArray

function largest(sortedArray){
    let maximum = sortedArray[0];

    for (let i = 0; i < sortedArray.length; i++) {
         if (sortedArray[i] > maximum) {
            maximum = sortedArray[i]
         }

         return maximum   
    }
}
console.log(largest(sortedArray));

