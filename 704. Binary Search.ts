function search(nums: number[], target: number): number {

    const bsearch = ( left, right ) => {
        
        let idx = Math.floor( (left + right) / 2 );
        
        if( left == right) {
            return nums[idx] == target ? idx : -1;
        }
        
        if( nums[idx] == target ) return idx;
        
        if( nums[idx] > target) return bsearch(left, idx);
        
        return bsearch(idx+1, right);
    }

    return bsearch(0, nums.length-1);
    
};

