function minPathSum(grid: number[][]): number {
    
    for( let i = 0 ; i < grid.length; i ++ ){
        for( let j = 0; j < grid[0].length; j++ ){
            if( i - 1 < 0){
                if( j - 1 < 0 ){
                    continue;
                }else{
                    grid[i][j] += grid[i][j-1];
                }
            }else if ( j - 1 < 0) {
                grid[i][j] += grid[i-1][j];
            }else {
                if(grid[i-1][j] > grid[i][j-1] ){
                    grid[i][j] += grid[i][j-1];
                }else{
                    grid[i][j] += grid[i-1][j];
                }
            }
        }
    }
    
    return grid[grid.length-1][grid[0].length-1];
    
    
};
