function search(nums: number[], target: number): number {
    
    const rec = (start,end, pivot) => {
        let idx = Math.round( (start + end) / 2 );
        if( start > end ) return [-1,false];
        
        if( nums[idx] == target ) return [idx,true];
        
        if(pivot){
            if(nums[idx] > nums[idx+1]) return [idx,false];
        
            if( nums[idx] > nums[nums.length-1]){
                return rec( idx + 1, end, true);
            }else{
                return rec(start, idx-1, true);
            }
        }else{
            if( nums[idx] < target){
                 return rec(idx+1, end, false);
            }else{
                return rec(start, idx-1, false);
            }
            
        }
        
    }
    
    let res = rec(0,nums.length-1,true);
    let ans;
    
    if(res[1]) return res[0];
    if( res[0] != -1){
        ans = rec(0,res[0]-1, false);
        if(ans[0] != -1) return ans[0];
        return rec(res[0]+1, nums.length-1,false)[0]
    }else{
        return rec(0, nums.length-1,false)[0]
    }
};
