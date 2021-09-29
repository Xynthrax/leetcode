function minimumTotal(triangle: number[][]): number {
    
    let len = triangle.length;
    
    if( len == 1) return triangle[0][0];
    
    let dp = [];
    
    dp[0] = triangle[0];
    
    for( let i = 1; i< len; i++){
        
        let tmpArr = [];
        
        for( let j = 0; j< triangle[i].length; j++){
            
            if(j == 0){
                tmpArr[j] = dp[i-1][0] + triangle[i][0];
            }else if ( j == triangle[i].length - 1){
                tmpArr[j] = dp[i-1][j - 1] + triangle[i][j];
            }else{
                tmpArr[j] = Math.min( dp[i-1][j], dp[i-1][j-1] ) + triangle[i][j];
            }
            
        }
        
        dp[i]=tmpArr;
        
    }
    
    // console.log(dp);
    
    return Math.min(...dp[len-1]);

};
