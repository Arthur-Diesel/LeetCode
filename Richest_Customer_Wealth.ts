function maximumWealth(accounts: number[][]): number {
    let richest: number = 0
    accounts.forEach((account) => {
        const wealth = account.reduce((sum, current) => sum + current, 0)
        if(wealth > richest){
            richest = wealth
        }
    })
    return richest
}