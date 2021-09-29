function sortArrayByParityII(nums: number[]): number[] {
    
    for( let i = 0; i < nums.length-1; i++){
        if( i % 2 == 0) {
            if( nums[i] % 2 != 0 ){
                for( let a = i + 1; i< nums.length; a+=2){
                    // console.log(a, nums[a]);
                    if( nums[a] % 2 == 0){
                        // console.log("swapping");
                        let tmp = nums[a];
                        nums[a] = nums[i];
                        nums[i] = tmp;
                        break;
                    }
                }
            }
        }else{
            if( nums[i] % 2 == 0 ){
                for( let a = i + 1; i< nums.length; a+=2){
                    if( nums[a] % 2 == 1){
                        let tmp = nums[a];
                        nums[a] = nums[i];
                        nums[i] = tmp;
                        break;
                    }
                }
            }
        }
    }
    
    return nums;

};
