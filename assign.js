



// 1 a FUNCTION THAT REVERESE A STRING

function reverseString(str) {
    // Split the string into an array of characters, reverse it, then join it back into a string
    return str.split('').reverse().join('');
}

// Example usage
var originalString = "Hello, world!";
var reversedString = reverseString(originalString);
console.log(reversedString); // Output: "!dlrow ,olleH"


//2  Create a function that counts the number of characters in a string.

function countCharacters(str) {
    // Use the length property of the string to get the number of characters
    return str.length;
}

// Example usage
var myString = "Hello, world!";
var characterCount = countCharacters(myString);
console.log("Number of characters:", characterCount); // Output: Number of characters: 13


// 3 Implement a function that capitalizes the first letter of each word in a sentence.

function capitalizeWords(sentence) {
    // Split the sentence into an array of words
    var words = sentence.split(" ");
    
    // Iterate through each word
    for (var i = 0; i < words.length; i++) {
        // Capitalize the first letter of each word and concatenate with the rest of the word
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    
    // Join the words back into a sentence
    return words.join(" ");
}

// Example usage
var sentence = "hello world! how are you?";
var capitalizedSentence = capitalizeWords(sentence);
console.log(capitalizedSentence); // Output: Hello World! How Are You?



//4 Write functions to find the maximum and minimum values in an array of numbers.

function findMax(arr) {
    if (arr.length === 0) {
        return null; // Return null if the array is empty
    }

    var max = arr[0]; // Assume the first element is the maximum

    // Iterate through the array starting from the second element
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if current element is greater
        }
    }

    return max;
}

function findMin(arr) {
    if (arr.length === 0) {
        return null; // Return null if the array is empty
    }

    var min = arr[0]; // Assume the first element is the minimum

    // Iterate through the array starting from the second element
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]; // Update min if current element is smaller
        }
    }

    return min;
}

// Example usage
var numbers = [5, 3, 9, 1, 7, 2];
console.log("Maximum value:", findMax(numbers)); // Output: Maximum value: 9
console.log("Minimum value:", findMin(numbers)); // Output: Minimum value: 1


//5 Create a function that calculates the sum of all elements in an array.


function sumArray(arr) {
    var sum = 0;

    // Iterate through the array and add each element to the sum
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

// Example usage
var numbers = [5, 3, 9, 1, 7, 2];
console.log("Sum of array:", sumArray(numbers)); // Output: Sum of array: 27



//6  Implement a function that filters out elements from an array based on a given condition.


function filterArray(arr, condition) {
    var filteredArray = [];

    // Iterate through the array
    for (var i = 0; i < arr.length; i++) {
        // Check if the element satisfies the condition
        if (condition(arr[i])) {
            // If yes, add it to the filtered array
            filteredArray.push(arr[i]);
        }
    }

    return filteredArray;
}

// Example usage
var numbers = [5, 3, 9, 1, 7, 2];
var filteredNumbers = filterArray(numbers, function(num) {
    return num > 5; // Filter out numbers greater than 5
});
console.log("Filtered array:", filteredNumbers); // Output: Filtered array: [9, 7]



//7  Write a function to calculate the factorial of a given number.

function factorial(n) {
    // Base case: if n is 0 or 1, factorial is 1
    if (n === 0 || n === 1) {
        return 1;
    }
    
    // Recursive case: n! = n * (n-1)!
    return n * factorial(n - 1);
}

// Example usage
var number = 5;
var result = factorial(number);
console.log("Factorial of", number, "is", result); // Output: Factorial of 5 is 120


//8 Create a function to check if a number is prime or not.


function isPrime(number) {
    // If number is less than 2, it's not prime
    if (number < 2) {
        return false;
    }

    // Loop from 2 to the square root of the number
    for (var i = 2; i <= Math.sqrt(number); i++) {
        // If number is divisible by any number between 2 and its square root, it's not prime
        if (number % i === 0) {
            return false;
        }
    }

    // If number is not divisible by any number between 2 and its square root, it's prime
    return true;
}

// Example usage
var num = 17;
if (isPrime(num)) {
    console.log(num + " is prime.");
} else {
    console.log(num + " is not prime.");
}


// Implement a function to generate the Fibonacci sequence up to a given number of terms.

function generateFibonacci(terms) {
    var fibonacciSequence = [];

    // Base case: first two terms of Fibonacci sequence are always 0 and 1
    if (terms >= 1) {
        fibonacciSequence.push(0);
    }
    if (terms >= 2) {
        fibonacciSequence.push(1);
    }

    // Generate subsequent terms of Fibonacci sequence
    for (var i = 2; i < terms; i++) {
        // Fibonacci number at position i is the sum of previous two Fibonacci numbers
        fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
    }

    return fibonacciSequence;
}

// Example usage
var numberOfTerms = 10;
var fibonacci = generateFibonacci(numberOfTerms);
console.log("Fibonacci sequence up to", numberOfTerms, "terms:", fibonacci);
