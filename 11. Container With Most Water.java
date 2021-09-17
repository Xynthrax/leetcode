class Solution {
    public int maxArea(int[] height) {
        
        int maxA = 0;
        
        int Li = 0;
        int L = height[Li];
        int Ri = height.length - 1;
        int R = height[Ri];
        
        if( height.length == 2) return getArea(Li,L,Ri,R);
        
        while(Li != Ri){
            int area = getArea(Li,L,Ri,R);
            maxA = area > maxA ? area : maxA;
            // System.out.println(maxA);
            if( L > R){
                Ri--;
                R = height[Ri];
            }else{
                Li++;
                L = height[Li];
            }
        };
        
        return maxA;
        
    }
    
    public int getArea(int x1,int y1,int x2,int y2){
        
        int min = y1 > y2 ? y2 : y1;
        return (x2-x1)*min;
    }
}
