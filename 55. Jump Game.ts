function canJump(nums: number[]): boolean {
    
    if(nums.length == 1) return true;
    
    let max = nums[0];
    
    for ( let i = 0; i <= max; i++){
        if( i + nums[i] >= nums.length - 1) return true;
        if(i + nums[i] > max) max = i + nums[i];
    }
    return false;
    
};
