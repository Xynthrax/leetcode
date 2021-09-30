class Solution:
    def reverseBits(self, n: int) -> int:
        
        ans=''
        
        for i in range(0,32):
            if n & 1 << i is 0:
                ans+= '0'
            else:
                ans+= '1'
                
        # print(ans)
        
        return int(ans,2)
        
