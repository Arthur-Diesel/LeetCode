function numberOfSteps(num: number): number {
    const isEven = number => number % 2 === 0 ? true : false
    let count: number = 0
    
    while(num != 0){
        if(isEven(num)){
            num = num / 2
        } else {
            num = num - 1
        }
        count++
    }
    
    return count++
}