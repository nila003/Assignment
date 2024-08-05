//1
var arr=[2,4,6,'Nil',10];

function isPrime(num) {
    if (num <= 1) {
        return false; }
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false; 
        }
    }
    return true; 
}
function checkFirstElementPrime(arr) {
    if (arr.length == 0) {
      return "Array is empty.";
    }
    var firstElement = arr[0];
    if (typeof firstElement != "number") {
        return "The first element is not a number.";
      }
    return isPrime(firstElement) ? "The first element is prime." : "The first element is not prime.";
  }
  console.log(checkFirstElementPrime(arr));

//2

var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 3];

var mf = 1;  //max freq
var f = 0;   //current el freq
var el;    //mf element

for (var i = 0; i < arr.length; i++) 
    {
    for (var j = i; j < arr.length; j++) 
        {
        if (arr[i] == arr[j])
            f++;
        if (mf < f) 
            {
            mf = f;
            el = arr[i];
        }
    }
    f = 0;
}
console.log(el);

//3
for(var i=0;i<=15;i++)
{
    if (i%2==0) {
        console.log(i+ " is even");
    } else {
        console.log(i+ " is odd");
    }
}

//4

 var arr=[2,4,6,8];
 var sumOfSquare=0;

 for (let index = 0; index < arr.length; index++) {
    sumOfSquare += arr[index]*arr[index];
 }

 console.log("Sum of squares = ",sumOfSquare);