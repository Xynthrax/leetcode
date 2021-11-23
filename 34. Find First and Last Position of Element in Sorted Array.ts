function searchRange(nums: number[], target: number): number[] {
    
    const findTarget = (start,end,dir) => {
        let idx = Math.round((start + end ) / 2);
        if ( start > end ) return -1;
        
        if ( nums[idx] == target){
            if (dir == 0) return idx;
            if(dir == 1 ){
                if( idx == 0 || nums[idx-1] != target) return idx;
                return findTarget(start, Math.round((start + end ) / 2) - 1,1);
            }else{
                if( idx == nums.length-1 || nums[idx+1] != target) return idx;
                
                return findTarget( Math.round((start + end ) / 2) + 1, end, 2 );
            }
        }
        if( nums[idx] < target) return findTarget( Math.round((start + end ) / 2) + 1, end, dir );
        return findTarget(start, Math.round((start + end ) / 2) - 1, dir);
    }
    
    let res = findTarget(0,nums.length-1,0);
    if( res == -1 ) return [-1,-1];

    let start = findTarget(0,res,1);
    let end = findTarget(res,nums.length-1,2);
    
    
    return [start,end];
};
