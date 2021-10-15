function jump(nums: number[]): number {
    
    if(nums.length == 1) return 0;
    let count = 0;
    let max = nums[0];
    let k = 0;
    while(k < nums.length){
        let tmp = max;
        count++;
        for ( let i = k; i <= tmp; i++){
            max = Math.max(i+nums[i],max);
            if( i + nums[i] >= nums.length - 1){
                if( i != k )count++;
                return count;
            }
        }
        k=tmp;
    }
    return count;
};
