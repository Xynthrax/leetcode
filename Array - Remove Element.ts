function removeElement(nums: number[], val: number): number {

    let l = 0;
    let r = nums.length - 1;
    let count = 0;
    while(l<r){
        if(nums[l] == val){
            if(nums[r] != val){
                let tmp = nums[l];
                nums[l] = nums[r];
                nums[r] = tmp;
            }else{
                r--;
                continue;
            }
        }else{
            l++
        }
    }
    
    let idx = nums.indexOf(val);
    return idx == -1 ? nums.length: idx;
    
};
