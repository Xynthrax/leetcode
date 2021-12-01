function mySqrt(x: number): number {

    const bsearch = (left,right) => {
        
        let num = Math.floor(left + ( right - left) / 2);
        
        let sqr = num*num;
        let nsqr = (num+1)*(num+1);
        
        if( sqr == x) return num;
        if( sqr < x && nsqr > x) return num;
        if( sqr < x) return bsearch(num, right);
        return bsearch(left, num);
        
    }
    
    return bsearch(1, x);
    
};
