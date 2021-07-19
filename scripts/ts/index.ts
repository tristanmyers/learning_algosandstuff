// 

type operator = 'modulo' | 'and';

function isEvenOrOdd(funcOperator:operator, n:number) {
    // 
    if (funcOperator == 'modulo') {
        return n % 2 ? 'Odd' : 'Even';

    /*
    using the bit AND operator is just another method to see if a number is odd or even
    by comparing the first bit of the number.
    */
    } else if (funcOperator == 'and') {
        return n & 1? 'Odd' : 'Even';
    }
}

console.log(isEvenOrOdd('modulo', 30104));