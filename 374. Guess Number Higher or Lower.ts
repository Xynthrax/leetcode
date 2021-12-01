/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
    
    const bsearch = (left, right) => {
        let mid = Math.floor((left+right) / 2);    
        let ans = guess(mid);
        // console.log(mid);
        
        if( ans == 0 ) return mid;
        if( ans == 1 ) return bsearch(mid+1,right);
        return bsearch(left,mid-1);
        
    }
    
    return bsearch(1,n);
};
