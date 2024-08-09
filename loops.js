// below code to display fizz buzz according to condition
console.log(" ")
console.log("============= Print fizz, buzz=============");

let Counter=0;
for (Counter=0; Counter<=100; Counter++ ){

    if((Counter % 3) == 0 && (Counter % 5) == 0){ // first check whether both conditions true?
        console.log("Fizz Buzz");
    }else if((Counter % 3) == 0){ // if both are not true whether this one?
        console.log("Fizz");
    }else if((Counter % 5) == 0){ //if not above two true, whether this is true?
        console.log("Buzz");
    }else{
        console.log(Counter);     //if all conditions fails display number
    }
}


console.log(" ")
console.log("============= Find Next Prime number==================");

function isPrime(n) 
{ 
	if (n <= 1) return false; 
	if (n <= 3) return true; 
	
	if (n%2 == 0 || n%3 == 0) return false; 
	
	for (let i=5; i*i<=n; i=i+6) 
		if (n%i == 0 || n%(i+2) == 0) 
		return false; 
	
	return true; 
} 

// Function to return the smallest  prime number greater than N 

function nextPrime(N) 
{ 
	if (N <= 1) 
		return 2; 

	let prime = N; 
	let found = false; 

	// Loop continuously until isPrime returns true for a number greater than n 
	while (!found) { 
		prime++; 
		if (isPrime(prime)) 
			found = true; 
	} 
	return prime; 
} 


    let N = 89;
    let nextPrimeNum = nextPrime(N)  // Calling nextPrime function

	console.log('Next Prime Number after ' +N+ ' is ' +nextPrimeNum); 
                                 


console.log(" ")

console.log("===================== Feeling Loopy ================= ")
console.log("===================== First solution ================= ")


/****  FIRST OPTION :     this below first code is just spliting string with line delimiter '\n' and creating array element as per function property, then iterating through for loop to display array elements */


let str ="Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

str = str. replace(/,/g, ", "); // Repacing delimiter comma(,) with some space for better visibility

let newLine_delimiter = '\n';   // declaring new line delimiter
let elementsWithoutDelimiter = str.split(newLine_delimiter);   //spliting string with newline delimiter to create array

// iterating ewly created array with for loop to display array elements which are created by newline delimiter
for(iteration=0; iteration < elementsWithoutDelimiter.length; iteration++){

    console.log(elementsWithoutDelimiter[iteration])

}
console.log(" ");
console.log(" ");



/***  SECOND OPTION :       */


console.log("===================== Second solution ================= ")
originalString = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

// Below code converts the given string to array and all data will be stored as array element in separatedArray
separatedArray = [];
let previousIndex = 0;
for (i = 0; i < originalString.length; i++) {

    // Check the character for a comma
    if (originalString[i] == ",") {
    
        // Split the string from the last index to the comma
        separated = originalString.slice(previousIndex, i);
        separatedArray.push(separated);

        previousIndex = i + 1;    // Update the index of the last string
    }
}
separatedArray.push(originalString.slice(previousIndex, i));


// below code will iterate through for loop for separatedArray[] and check for new line delimiter , if found print next data on new line.
let array = [];
for(x=0; x<separatedArray.length; x++){
        if(!(separatedArray[x].includes('\n'))){
            array.push(separatedArray[x]);
        }else{
            var arrayy = separatedArray[x].split('\n'),  a = arrayy[0], b = arrayy[1];
            array.push(arrayy[0]);
            console.log(array);
            array = [];
            array.push(arrayy[1]);
        }
}