function findPeakElement(nums: number[]): number {

    const findElm = (start, end) => {
        if( start == end ) return start;
        
        const mid = Math.floor( (start + end) / 2 );
        
        if( nums[mid] > nums[mid+1] ){
            return findElm(start, mid);
        }else{
            return findElm(mid+1, end);
        }
    }
    
    return findElm(0,nums.length-1);
};
