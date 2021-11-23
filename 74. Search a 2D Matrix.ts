function searchMatrix(matrix: number[][], target: number): boolean {
    
    const findArr = (start,end) => {
        if(start > end) return -1;
        
        let idx = Math.round( (start + end) / 2 );
        
        if( matrix[idx][0] <= target && target <= matrix[idx][matrix[idx].length-1]) return idx;
        
        if( matrix[idx][0] > target ){
            return findArr( start, idx-1);
        }else{
            return findArr( idx+1, end);
        }
    }
    
    const findElm = (start,end) => {
        if(start>end) return false;
        
        let idx = Math.round( (start + end) / 2 );
        
        if( chosen[idx] == target) return true;
        
        if( chosen[idx] < target) return findElm(idx+1, end);
        return findElm(start, idx-1);
    }
    
    let arr = findArr(0, matrix.length-1);
    if(arr == -1) return false;
    const chosen = matrix[arr];
    return findElm(0,chosen.length-1);

};
