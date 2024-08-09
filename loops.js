console.log(" ")
console.log("============= Print fizz, buzz=============");

let Counter=0;
for (Counter=0; Counter<=100; Counter++ ){

    if((Counter % 3) == 0 && (Counter % 5) == 0){
        console.log("Fizz Buzz");
    }else if((Counter % 3) == 0){
        console.log("Fizz");
    }else if((Counter % 5) == 0){
        console.log("Buzz");
    }else{
        console.log(Counter);
    }
}

console.log(" ")
console.log("============= FInd NExt Prime number==================");

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


	let N = parseInt(prompt("Enter a positive number: "));   // Take input from user
    
    let nextPrimeNum = nextPrime(N)  // Calling nextPrime function with user input value

	console.log('Next Prime Number after ' +N+ ' is ' +nextPrimeNum); 




console.log(" ")
console.log("===================== Feeling Loopy ================= ")


let str ="Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"


let delimiter = ',';  
let newLine = '\n';  
let elementsWithoutComma = str.split(delimiter);  
let elementsWithoutNewLine1 = str.split(newLine);


for(iteration=0; iteration<elementsWithoutNewLine1.length; iteration++){
    console.log(elementsWithoutNewLine1[iteration])
}

//// this code is just simple by spliting strings without giving more time.