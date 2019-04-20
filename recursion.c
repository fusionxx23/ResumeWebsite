#include <stdio.h>


int factorial(int); 

main() {


    int x; 
    int=10; 

    printf("Factorial of %d is:  %d", x, factorial(x)); 
}
// Finds the factorial of a integer 
int factorial(int i ) {
    
    if(i == 1) {
        return 1; 
    }
    // Turning int i positive 
    else if(i < 0) {
        i * -1; 
        return i*factorial(i-1); 
    }
    // Using recursion to find all factors
    else {
        return i*factorial(i-1); 
    }
}