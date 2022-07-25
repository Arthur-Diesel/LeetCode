function fizzBuzz(n: number): string[] {
    let count: number = 1
    let answer: string[] = []
    
    let isDivisibleBy = (num, divider) => num % divider === 0 ? true : false
    let isDivisibleFive = num => isDivisibleBy(num,5)
    let isDivisibleThree = num => isDivisibleBy(num,3)
    
    while (count <= n){
        if(isDivisibleFive(count) && isDivisibleThree(count)){
            answer.push('FizzBuzz')
        } else if (isDivisibleFive(count)) {
            answer.push('Buzz')
        } else if(isDivisibleThree(count)) {
            answer.push('Fizz')
        } else {
            answer.push(count.toString())
        }
        count++
    }
    
    return answer
}