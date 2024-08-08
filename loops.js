
let Counter=0;
for (Counter=0; Counter<=100; Counter++ ){

    if((Counter % 3) == 0 && (Counter % 5) == 0){
        //console.log("Fizz Buzz");
    }else if((Counter % 3) == 0){
        //console.log("Fizz");
    }else if((Counter % 5) == 0){
        //console.log("Buzz");
    }else{
        //console.log(Counter);
    }
}





// const number = parseInt(prompt("Enter a positive number: "));
// const number =3;
// let isPrime = true;

// if (number === 1) {
//     console.log("Prime number is greater than 1");
// }else if (number > 1) { // check if number is greater than 1
//     for (let i = 2; i < number; i++) { // looping through 2 to number-1
//         console.log(number , i)
//         if (number % i == 0) {
//             console.log(number , i)
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(number +` is a prime number`);
//     } else {
//         console.log(number +` is a not prime number`);
//     }
// }



function isPrime(n) 
{ 
	// Corner cases 
	if (n <= 1) return false; 
	if (n <= 3) return true; 
	
	// This is checked so that we can skip 
	// middle five numbers in below loop 
	if (n%2 == 0 || n%3 == 0) return false; 
	
	for (let i=5; i*i<=n; i=i+6) 
		if (n%i == 0 || n%(i+2) == 0) 
		return false; 
	
	return true; 
} 

// Function to return the smallest 
// prime number greater than N 

function nextPrime(N) 
{ 

	// Base case 
	if (N <= 1) 
		return 2; 

	let prime = N; 
	let found = false; 

	// Loop continuously until isPrime returns 
	// true for a number greater than n 
	while (!found) { 
		prime++; 

		if (isPrime(prime)) 
			found = true; 
	} 

	return prime; 
} 

// Driver code 

	let N = parseInt(prompt("Enter a positive number: ")); 
    
    let nextPrimeNum = nextPrime(N)

	console.log('Next Prime Number after ' +N+ ' is ' +nextPrimeNum); 

// This code is contributed by Mayank Tyagi

