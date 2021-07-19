// recursion
// tutorial used https://www.geeksforgeeks.org/recursion/


/* 
- fact(n) where n=4, 4-1=3, 4*3=12 returns 12, n=3, 3-1=2, 12*2=24, n=2, 2-1=1, base case is met
- i still don't understand
*/

function fact(n:number): number { 
    if (n <= 1) { // base case
        return 1;
    } else {
        return n * fact(n - 1);
    }
}

console.log(fact(4));