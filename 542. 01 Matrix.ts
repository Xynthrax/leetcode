function updateMatrix(mat: number[][]): number[][] {

    let queue = [];
    
    for( let i = 0 ; i < mat.length ; i++ ){
        for( let j = 0; j < mat[0].length; j++){
            if(mat[i][j] == 0) {
                queue.push([i,j]);
            } else {
                mat[i][j] = -1;
            }
        }
    }
    // console.log(mat);
    let level = 0; 
    
    
    while(queue.length > 0){
        let size = queue.length;
        // console.log(size);
        level++;
        while(size > 0){
            
            let coord = queue.shift();
            
            
            let dir = [[-1,0],[1,0],[0,-1],[0,1]];
            for (let d of dir){
                let x = coord[0] + d[0];
                let y = coord[1] + d[1];
                // console.log(x,y);
                if( x < 0 || x >= mat.length || y < 0 || y >= mat[0].length || mat[x][y] != -1) continue;
                
                mat[x][y] = level;
                queue.push([x,y]);
                // console.log("pushed");
            }
            size--;
        }
        // console.log(size);
    }
    return mat;
    
};


// let check = (arr,x,y) => {
//     if( x < 0 || x >= arr.length || y < 0 || y >= arr[0].length) return;
//     if(arr[x][y] == 0) return 0;
    
//     return 1 + Math.min( 
//         check(arr,x-1,y), 
//         check(arr,x+1,y), 
//         check(arr,x,y-1), 
//         check(arr,x,y+1), 
//     )
    
// }
