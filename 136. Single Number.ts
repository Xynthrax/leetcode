function singleNumber(nums: number[]): number {

    if( nums.length == 1) return nums[0];
    let ans = nums[0];
    
    for(let i = 1 ; i < nums.length; i ++){
        ans = ans ^ nums[i];
    }
    return ans;
};
