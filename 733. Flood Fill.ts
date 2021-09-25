function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
    let sColor = image[sr][sc];
    if(sColor == newColor) return image;
    fillCells(image,sr,sc,sColor,newColor);
    return image;
};

let fillCells = (arr, x, y, savedColor, newColor) => {
    console.log(x,y);
    if( x < 0 || x >= arr.length || y < 0 || y >= arr[0].length) return;
    if( savedColor != arr[x][y]) return;
    
    arr[x][y] = newColor;
    
    fillCells(arr,x-1,y,savedColor,newColor);
    fillCells(arr,x+1,y,savedColor,newColor);
    fillCells(arr,x,y-1,savedColor,newColor);
    fillCells(arr,x,y+1,savedColor,newColor);
    
}
