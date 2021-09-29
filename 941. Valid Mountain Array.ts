function validMountainArray(arr: number[]): boolean {
    
    if(arr.length < 3) return false;
    
    let indx = 1;
    let found = false;
    
    while (indx < arr.length){
        if(arr[indx-1] == arr[indx] ) return false;
        if(found){
            if( arr[indx-1] < arr[indx]  ) return false;
        }else{
            if( arr[indx-1] > arr[indx]){
                if(!found && indx-1 == 0) return false;
                found=true;
            }
        }
        indx++;
    }
    
    return found;
    

};
