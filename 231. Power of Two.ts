function isPowerOfTwo(n: number): boolean {
    if( n <= 0) return  false;
    if( n == 1) return true;
    
    while ( n > 1){
        let tmp = n >> 1;
        if( tmp  << 1 != n) return false;
        n = n >> 1;
    }

    return true;
};
