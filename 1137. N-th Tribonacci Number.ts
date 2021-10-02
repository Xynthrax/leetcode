

function tribonacci(n: number): number {

    return rec({}, n);
    
};

function rec( data, n) {
    
    if(n==0) return 0;
    if(n==1) return 1;
    if(n==2) return 1; 
    
    if( !data[n] ){
        data[n] = rec(data,n-1) + rec(data,n-2) + rec(data,n-3);
    }
    return data[n];
    
}
