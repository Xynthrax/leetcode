function lengthOfLongestSubstring(s: string): number {

    if(s.length == 0) return 0;
    if(s.length == 1) return 1;
    
    let L = 0;
    let R = 1;
    let max = 1;
    while (R < s.length) {
        if(s.substring(L,R).indexOf(s[R]) == -1) {
            max = Math.max(R-L+1, max);
        }else{
            L= L + s.substring(L,R).indexOf(s[R])+1;
        }
        R++;
    }
    return max;
};
