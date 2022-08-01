function majorityElement(nums: number[]): number {
    let obj = {}
    let majorityNumber: number = 0
    let majorityCount: number = 0
    nums.forEach((num) => {
        if(obj[num] === undefined){
            obj[num] = 1
        } else {
            obj[num]++
        }
    })
    Object.keys(obj).forEach((key) => {
        if(obj[key] > majorityCount){
            majorityNumber = parseInt(key)
            majorityCount = obj[key]
        }
    })
    return majorityNumber
};