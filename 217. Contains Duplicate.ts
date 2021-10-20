function containsDuplicate(nums: number[]): boolean {

    let res = {};
    
    for ( let i of nums){
        // console.log(res[i],i);
        if(res[i]){
            return true;
        }else{
            res[i] = true;
        }
        
    }
    return false;
};
