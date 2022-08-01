function singleNumber(nums: number[]): number {
    let number: number = 0
    nums.forEach((num) => {
        if(nums.indexOf(num) === nums.lastIndexOf(num)){
            number = num
        }
    })
    return number
}