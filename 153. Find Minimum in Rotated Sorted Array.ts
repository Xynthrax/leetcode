function findMin(nums: number[]): number {
    
    if(nums.length == 1) return nums[0];
    
    if(nums.length == 2) return nums[0] > nums[1] ? nums[1] : nums[0];
    
    if(nums[0] < nums[nums.length-1]) return nums[0];
    
    const findPivot = (start,end) => {

        let idx = Math.round( (start + end) / 2 );
        
        if( nums[idx] > nums[idx+1]) return nums[idx+1];
        
        if( nums[idx] < nums[nums.length - 1]) return findPivot(start, idx-1);
        
        return findPivot( idx, end);
        
    }
    
    return findPivot(0, nums.length-1);

};
