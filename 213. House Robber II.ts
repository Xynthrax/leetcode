function rob(nums: number[]): number {
    
    if( nums.length == 1 ) return nums[0];
    
   return Math.max(help(nums.slice(0, nums.length-1)), help(nums.slice(1)));

};

const help = (nums) => {
    if(nums.length == 1) return nums[0];
    
    if(nums.length == 2) return Math.max(nums[0], nums[1]);
    
    let dp = [];
    
    dp[0] = nums[0];
    dp[1] = nums[1];
    
    for( let i = 2; i < nums.length; i++){
        dp[i] = nums[i];
        let max = 0;
        for( let j = 0; j < i-1; j++){
            max = Math.max( max, dp[j] );
        }
        dp[i]+= max;
    }
    // console.log(dp);
    return Math.max(dp[dp.length-1], dp[dp.length-2]);
}
