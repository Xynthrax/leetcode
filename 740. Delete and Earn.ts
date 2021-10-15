function deleteAndEarn(nums: number[]): number {
    
    if(nums.length == 1) return nums[0];
    
    let arr = [];
    
    let avoid = 0;
    let using = 0;
    let prev;
    
    for(let num of nums){
        if(arr[num] == null) arr[num] = 0;
        arr[num] += num;
    }
    
    for( let i = 1; i < arr.length ; i ++){
        if(!arr[i]) continue;
        // console.log(arr[i]);
        if( i - 1 == prev){
            let tmpA = Math.max(avoid,using);
            let tmpU = avoid + arr[i];
            using = tmpU;
            avoid = tmpA;
        }else{
            let tmpA = Math.max(avoid,using);
            let tmpU = Math.max(avoid,using) + arr[i];
            avoid = tmpA;
            using = tmpU;
        }
        // console.log(i,avoid,using);
        prev = i;
    }
    return Math.max(avoid,using);
};
